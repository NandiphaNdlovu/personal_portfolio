import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SideNavbar } from "../components/SideNavbar/SideNavbar";

export function PageLayout() {
  return (
    <div className=" flex flex-row-2 w-full h-lvh ">
      <div className="fixed w-full h-fit invisible md:visible">
        <NavigationBar />
      </div>
      <div className="fixed w-fit h-full visible md:invisible">
        <SideNavbar />
      </div>
      <div className="h-full flex flex-col-3 pt-15 w-full">
        <div className="w-1/3" />
        <div className="w-full h-full">
          <Outlet />
        </div>
        <div className="w-1/3" />
      </div>
    </div>
  );
}
