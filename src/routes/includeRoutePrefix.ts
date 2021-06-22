
import { Endpoint } from "./types";

export function includeRoutePrefix({ routes, prefixRoute }: Endpoint) {
    if (prefixRoute) {
        return routes.map((route) => {
            const { path } = route;

            const pathWithPrefix = `${prefixRoute}${path}`;

            return { ...route, path: pathWithPrefix };
        });
    }

    return routes;
}