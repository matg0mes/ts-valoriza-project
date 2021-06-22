import { Router } from "express";

import { Route } from "./types";
import { includeRoutePrefix } from "./includeRoutePrefix";

import user from "endpoints/UserEndpoint";
const router = Router();

export const routes: Route[] = [...includeRoutePrefix(user)];

for (const route of routes) {
  const { path, method, action } = route;

  router[method](path, action);
}

router.get("*", (req, res, next) =>
  res.status(404).json({ message: "RESOURCE_NOT_FOUND" })
);

export { router };