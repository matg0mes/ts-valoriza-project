import { Route } from "routes/types";
import { CreateTagController } from "controllers/CreateTagController";

const prefixRoute = "/tags";
const createTagController = new CreateTagController();

const routes: Route[] = [
  {
    method: "post",
    path: "/",
    description: "create a taf",
    action: createTagController.handle,
  },
];

export default { prefixRoute, routes };