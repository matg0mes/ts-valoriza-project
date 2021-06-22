import { Route } from "../routes/types";
import { TutorialController } from "../controllers/TutorialController";

const prefixRoute = "/tutorial";
const tutorialController = new TutorialController();

const routes: Route[] = [
  {
    method: "get",
    path: "/hello",
    description: "post hello world",
    action: tutorialController.hello,
  },
  {
    method: "post",
    path: "/hello",
    description: "get hello world",
    action: tutorialController.hello,
  },
];

export default { prefixRoute, routes };