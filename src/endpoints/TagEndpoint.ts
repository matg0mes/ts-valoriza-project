import { Route } from "routes/types";
import { CreateTagController } from "controllers/CreateTagController";

const prefixRoute = "/tags";
const createTagController = new CreateTagController();

const routes: Route[] = [
  {
    method: "post",
    path: "/",
    description: "create a tag",
    action: createTagController.handle,
    middlewares: ["admin"]
  },
];

export default { prefixRoute, routes };