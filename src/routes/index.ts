import { Router } from "express";

import { Route } from "./types";
import { includeRoutePrefix } from "./includeRoutePrefix";

import tutorial from "../endpoints/TutorialEndpoint";
const router = Router();

export const routes: Route[] = [...includeRoutePrefix(tutorial)];

for (const route of routes) {
  const { path, method, action } = route;

  router[method](path, action);
}

router.get("*", (req, res, next) =>
  res.status(404).json({ message: "RESOURCE_NOT_FOUND" })
);

export { router };