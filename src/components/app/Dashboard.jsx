import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center flex justify-center">
        Dashboard
      </h1>

      <Link to="/" className="text-6xl hover:text-blue-400 m-5 ">
        &#8598;
      </Link>
    </div>
  );
}
export default Dashboard;
