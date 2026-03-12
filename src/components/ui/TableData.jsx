import { requests } from "../../utils/dummyData";

function TableData() {
  const statesStyle = {
    Pending: "text-[#FBBC04]",
    Approved: "text-[#067925]",
    Disapproved: "text-[#EA0703]",
  };
  return (
    <div className="overflow-x-auto rounded-md h-80 md:h-[calc(100vh_-_440px)]">
      <table className="table-auto border-collapse w-full">
        <thead className="sticky top-0">
          <tr className="bg-blue-700 text-white">
            <th className="px-4 py-2 text-left">Names of Requester</th>
            <th className="px-4 py-2 text-left">Request Type:</th>
            <th className="px-4 py-2 text-left">Date of Request</th>
            <th className="px-4 py-2 text-left ">Request Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr
              key={request.id}
              className="bg-white even:bg-gray-100 hover:bg-gray-200"
            >
              <td className=" px-4 py-2 font-light">{request.name}</td>
              <td className=" px-4 py-2 font-light">{request.serviceType}</td>
              <td className=" px-4 py-2 font-light">{request.date}</td>
              <td
                className={`px-4 py-2 font-semibold ${
                  statesStyle[request.state]
                }`}
              >
                {request.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableData;
