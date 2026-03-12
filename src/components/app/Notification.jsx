import IconBar from "./IconBar";
import { notifications as notificationData } from "../../utils/notificationData";
import NotificationSlice from "../ui/NotificationSlice";

function Notification() {
  return (
    <div>
      <main className="bg-white mt-4 py-2 shadow-md">
        <div>
          <h3 className="text-xl font-bold text-[#393943] px-8 py-2 mb-4">
            General notification
          </h3>
          <div className="space-y-2 overflow-y-auto h-[calc(100vh_-_250px)]">
            {notificationData.map((notification) => (
              <NotificationSlice
                notification={notification}
                key={notification.id}
              />
            ))}
          </div>
          <button className="mt-8 mb-6 px-8 text-[#525FFD] text-xl ">
            Read All
          </button>
        </div>
      </main>
    </div>
  );
}
export default Notification;
