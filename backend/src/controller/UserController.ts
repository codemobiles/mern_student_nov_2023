import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";
import * as bcrypt from "bcryptjs";
import { savedValue } from "../utils/cm-util";

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
      return { result: "ok 1234", messsage: "login" };
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }
}
