import { createBrowserRouter } from "react-router";
import { Dashboard } from "@/pages/app/Dashboard";
import { SignIn } from "@/pages/auth/SignIn";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Dashboard,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "sign-in",
        Component: SignIn,
      },
    ],
  },
]);
