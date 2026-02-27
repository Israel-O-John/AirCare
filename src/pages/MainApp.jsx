import { Link, Outlet } from "react-router-dom";
import Dashboard from "../components/app/Dashboard";

function MainApp() {
  return (
    <div>
      <Link to="/" className="text-6xl hover:text-blue-400 m-5 ">
        &#8598;
      </Link>
      <Outlet />
      <Link to="dashboard" className="text-6xl hover:text-blue-400 m-5 ">
        &rarr;
      </Link>
    </div>
  );
}
export default MainApp;
