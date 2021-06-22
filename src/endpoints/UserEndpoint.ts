import { Route } from "routes/types";
import { CreateUserController } from "controllers/CreateUserController";

const prefixRoute = "/users";
const createUserController = new CreateUserController();

const routes: Route[] = [
  {
    method: "post",
    path: "/",
    description: "create a user",
    action: createUserController.handle,
  },
];

export default { prefixRoute, routes };