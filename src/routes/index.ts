import { Router } from "express";

import { Route } from "./types";
import { includeRoutePrefix } from "./includeRoutePrefix";

import tag from "endpoints/TagEndpoint";
import user from "endpoints/UserEndpoint";

const router = Router();

export const routes: Route[] = [...includeRoutePrefix(user), ...includeRoutePrefix(tag)];

for (const route of routes) {
  const { path, method, action } = route;

  router[method](path, action);
}

router.get("*", (req, res, next) =>
  res.status(404).json({ message: "RESOURCE_NOT_FOUND" })
);

export { router };