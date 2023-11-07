import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        "/api/v2/" + route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    let port = process.env.PORT || 8081;
    app.listen(port);

    console.log(
      `Express server has started on port ${port}. Open http://localhost:3000/users to see results`
    );
  })
  .catch((error) => console.log(error));