import { Outlet } from "react-router-dom";
import SideBar from "../components/app/SideBar";
import IconBar from "../components/app/IconBar";
import { useState } from "react";

function MainApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-gray-100  min-h-screen">
      <div className="max-w-[1440px] mx-auto lg:flex">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="bg-gray-100/50 flex-1 px-6 py-2">
          <IconBar setSidebarOpen={setSidebarOpen} />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default MainApp;
