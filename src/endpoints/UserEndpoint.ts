import { Route } from "routes/types";
import { CreateUserController } from "controllers/CreateUserController";
import { AuthenticateUserController } from "controllers/AuthenticateUserController";

const prefixRoute = "/users";
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const routes: Route[] = [
  {
    method: "post",
    path: "/",
    description: "create a user",
    action: createUserController.handle,
  },
  {
    method: "post",
    path: "/session",
    description: "auth a user",
    action: authenticateUserController.handle,
  },
];

export default { prefixRoute, routes };