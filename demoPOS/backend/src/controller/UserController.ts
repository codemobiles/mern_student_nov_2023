import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";
import * as bcrypt from "bcryptjs";
import { savedValue } from "../utils/cm-util";
import jwt from "../utils/jwt";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.created = savedValue(req.body.created, new Date());
      req.body.level = savedValue(req.body.level, "normal");
      req.body.__v = savedValue(req.body.__v, 0);

      req.body.password = await bcrypt.hash(req.body.password, 8);
      const doc = await this.userRepository.save(req.body);
      return { result: "ok", message: doc };
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;

      let doc = await this.userRepository.findOne({
        where: { username },
      });

      if (doc) {
        let isPasswordValid = await bcrypt.compare(password, doc.password);
        if (isPasswordValid) {
          const payload = {
            id: doc._id,
            level: doc.level,
            username: doc.username,
          };
          let token = jwt.sign(payload);

          return { result: "ok", token, message: "success" };
        } else {
          return { result: "nok", message: "invalid password" };
        }
      } else {
        return { result: "nok", message: "invalid username" };
      }
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }
}
