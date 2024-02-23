import { ErrorPage } from "../pages/404";
import Home from "../pages/home";
import { RoutesType } from "./types";

export const routes: RoutesType = [
    { path: "/", element: Home },

    { path: "*", element: ErrorPage }
]
