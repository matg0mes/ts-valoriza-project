import { Route } from "routes/types";
import { CreateComplimentsController } from "controllers/CreateComplimentsController";

const prefixRoute = "/compliments";
const createComplimentsController = new CreateComplimentsController();

const routes: Route[] = [
  {
    method: "post",
    path: "/",
    description: "create a compliment",
    action: createComplimentsController.handle,
  },
];

export default { prefixRoute, routes };