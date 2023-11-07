import { NextFunction, Request, Response } from "express";
export class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      return { result: "ok 1234", messsage: "register" };
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
