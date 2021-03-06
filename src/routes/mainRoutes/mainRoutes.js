import { lazy } from "react";
export const userRoutes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: lazy(() => import("../../views/dashboard")),
  },
  {
    redirectRoute: true,
    name: "homePage",
    path: "/",
  },
];
export const guestRoutes = [
  {
    exact: true,
    path: "/",
    name: "homePage",
    component: lazy(() => import("../../views/login")),
  },
  {
    exact: true,
    path: "/redux-example",
    name: "redux-example",
    component: lazy(() => import("../../views/reduxExample")),
  },
  {
    redirectRoute: true,
    name: "homePage",
    path: "/",
  },
];
