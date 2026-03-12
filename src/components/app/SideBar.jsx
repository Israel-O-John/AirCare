import {
  BellDotIcon,
  CircleArrowOutUpLeftIcon,
  LayoutDashboardIcon,
  Menu,
  SettingsIcon,
  SidebarOpen,
  SquarePenIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function SideBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <div
        className={` fixed top-0 left-0 bottom-0 z-50 min-h-screen shadow-lg p-6 w-[260px] transform transition-transform bg-white duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <Link to="/">
          <img src="/Logo.png" alt="Aircare logo" />
        </Link>

        <div className="home-nav space-y-6 mt-8">
          <NavLink to="dashboard" onClick={() => setSidebarOpen(false)}>
            <LayoutDashboardIcon fill="white" />
            <h2>Dashboard</h2>
          </NavLink>
          <NavLink to="request" onClick={() => setSidebarOpen(false)}>
            <SquarePenIcon />
            <h2>Create request</h2>
          </NavLink>
          <NavLink to="notifications" onClick={() => setSidebarOpen(false)}>
            <BellDotIcon fill="white" />
            <h2>Notification</h2>
          </NavLink>
          <NavLink to="settings" onClick={() => setSidebarOpen(false)}>
            <SettingsIcon />
            <h2>Settings</h2>
          </NavLink>
          <Link className="log-out" to="/">
            <CircleArrowOutUpLeftIcon />
            Log Out
          </Link>
        </div>

        <div className="mt-16 bg-gray-100 flex flex-col items-center p-2 rounded-lg shadow-[4px_4px_8px_0px_#00000040] w-10/12 mx-auto ">
          <div className="w-12 h-12">
            <img src="/Chat.png" alt="chat box" className="w-full" />
          </div>
          <h3 className="text-2xl font-bold text-yellow-500">Support 24/7</h3>
          <p className="font-light">Talk to us anytime</p>
          <button className="px-6 py-1 mt-2 text-base text-white bg-blue-700 rounded-md">
            Start Chat
          </button>
        </div>
      </div>
    </>
  );
}
export default SideBar;
