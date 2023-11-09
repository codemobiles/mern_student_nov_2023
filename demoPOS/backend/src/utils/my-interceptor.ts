import { Request, Response } from "express";

export const interceptor1 = (req: Request, res: Response, next: Function) => {
  if (req.query.token1 == "1234") {
    next();
  } else {
    res.end("no authoized 1");
  }
};

export const interceptor2 = (req: Request, res: Response, next: Function) => {
  if (req.query.token2 == "5555") {
    next();
  } else {
    res.end("no authoized 2");
  }
};
