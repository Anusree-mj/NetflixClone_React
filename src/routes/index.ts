import { Sign } from "crypto";
import { ErrorPage } from "../pages/404";
import Home from "../pages/home";
import Login from "../pages/login";
import { RoutesType } from "./types";
import Signup from "../pages/signup";
import Account from "../pages/account";

export const routes: RoutesType = [
    { path: "/", element: Home },
    { path: "/login", element: Login },
    { path: "/signup", element: Signup },
    { path: "/account", element: Account },
    { path: "*", element: ErrorPage }
]
