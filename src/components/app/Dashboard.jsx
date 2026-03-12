import { Link } from "react-router-dom";
import IconBar from "./IconBar";
import { UsersRoundIcon } from "lucide-react";
import TableData from "../ui/TableData";

function Dashboard() {
  const requests = { Total: 10, Pending: 5, Approved: 10 };
  return (
    <>
      <main className="space-y-5 mt-8">
        <div className="flex text-xl justify-between bg-blue-700 text-white rounded-md p-4">
          <div>
            <h3 className=" font-bold">Welcome back username</h3>
            <p className="font-extralight mt-2">
              Place and track requests anytime and any day.
            </p>
          </div>
          <div className="w-[150px]">
            <img src="/Repair man 2.png" alt="Repair man" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row flex-wrap lg:justify-between">
          <div className="request">
            <UsersRoundIcon size={30} color="#FBBC04" />
            <div>
              <p>Total No. of requests</p>
              <h4>{requests.Total}</h4>
            </div>
          </div>
          <div className="request">
            <UsersRoundIcon color="#FBBC04" />
            <div>
              <p>Pending Requests</p>
              <h4>{requests.Pending}</h4>
            </div>
          </div>
          <div className="request">
            <UsersRoundIcon color="#FBBC04" />
            <div>
              <p>Approved Requests</p>
              <h4>{requests.Approved}</h4>
            </div>
          </div>
        </div>

        <div className="shadow-[4px_4px_8px_0px_#00000040] p-4">
          <h4 className="font-bold text-xl pb-4">AC Repair Request Progress</h4>
          <div className="mx-auto">
            <TableData />
          </div>
        </div>
      </main>
    </>
  );
}
export default Dashboard;
