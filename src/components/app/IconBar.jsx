import { BellDotIcon, Mail, Menu, Search } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function IconBar({ setSidebarOpen }) {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  const styles = {
    div: "flex justify-between items-center container",
    h2: "text-base md:text-3xl font-bold text-black capitalize ",
  };

  // let dashboard = false;
  // let notification = false;
  // if (openComponent === "dashboard") {
  //   dashboard = true;
  // }
  // if (openComponent === "notifications") {
  //   notification = true;
  // }

  const dashboard = currentPage === "dashboard";
  const notifications = currentPage === "notifications";

  console.log(notifications);

  return (
    <div>
      <div className={styles.div}>
        <div className="flex items-center gap-3">
          <Menu
            className="lg:hidden cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
          <h2 className={styles.h2}>{currentPage}</h2>
        </div>
        <div className="flex gap-4 items-center">
          {dashboard && (
            <div className="lg:flex gap-4 bg-white border border-black py-1 px-4 rounded-md items-center hidden ">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="focus:outline-none w-[280px]"
              />
              <Search size={16} />
            </div>
          )}
          <div className="flex gap-4 items-center">
            <BellDotIcon
              strokeWidth={1}
              color={notifications ? "#FBBC04" : "#000"}
            />
            <Mail strokeWidth={1} />
            <div className="rounded-full w-8 h-8 md:w-14 md:h-14">
              <img
                src="/Profile pic.png"
                alt="User Profile Picture"
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IconBar;
