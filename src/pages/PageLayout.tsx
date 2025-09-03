import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SideNavbar } from "../components/SideNavbar/SideNavbar";
import { PageFooter } from "../components/PageFooter/PageFooter";

export function PageLayout() {
  return (
    <>
      <div className="grid grid-row-3 w-full h-screen">
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
      <div className="bg-[url(./assets/img/banner-bg.png)] items-center w-full h-full">
        <PageFooter />
      </div>
    </>
  );
}
