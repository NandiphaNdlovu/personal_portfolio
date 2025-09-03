import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/Navbar/NavigationBar";

export function PageLayout() {
  return (
    <div className=" flex flex-row-2 w-full h-lvh ">
      <div className="fixed w-full h-fit ">
        <NavigationBar />
      </div>
      <div className="h-full pt-11 w-full bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
