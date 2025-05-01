import { Header } from "../../components/Header";
import { Outlet } from "react-router";

export function DefaultLayout() {
  return (
    <div className="max-w-full bg-base_background">
      <Header />
      <Outlet />
    </div>
  );
}
