import { Header } from "./components/Header";
import { Outlet } from "react-router";

export function DefaultLayout() {
  return (
    <div className="max-w-full bg-base-background">
      <Header />
      <div className="mt-[104px] max-w-full">
        <Outlet />
      </div>
    </div>
  );
}
