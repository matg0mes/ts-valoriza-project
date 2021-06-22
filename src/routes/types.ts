import { RequestHandler } from "express";

export interface Route {
  method: "get" | "post" | "delete" | "options" | "put";
  path: string;
  description: any;
  action: RequestHandler;
}

export interface Endpoint {
  routes: Route[];
  prefixRoute: String;
}