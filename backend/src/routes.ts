import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "post",
    route: "/api/v2/register",
    controller: UserController,
    action: "register",
  },
];
