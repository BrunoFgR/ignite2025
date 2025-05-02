import { Header } from "../../components/Header";
import { Outlet } from "react-router";

export function DefaultLayout() {
  return (
    <div className="bg-base-background max-w-full">
      <Header />
      <Outlet />
    </div>
  );
}
