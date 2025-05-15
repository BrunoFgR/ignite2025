import { createBrowserRouter } from "react-router";
import { Dashboard } from "@/pages/app/Dashboard";
import { SignIn } from "@/pages/auth/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "sign-in",
    Component: SignIn,
  },
]);
