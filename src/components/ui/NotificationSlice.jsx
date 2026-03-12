import { EllipsisVerticalIcon } from "lucide-react";

function NotificationSlice({ notification }) {
  return (
    <div className={`${notification.read ? "" : "bg-[#D5D0D0]"}`}>
      <div className={`flex items-center justify-between py-1 px-8 `}>
        <div
          className={`text-white w-full ${
            notification.read ? "border-b-2" : ""
          }`}
        >
          <p className="md:text-xl font-light text-[#393943]">
            {notification.message}
          </p>
          <p className=" text-xs md:text-sm font-light text-[#52525F]">
            {notification.time}
          </p>
        </div>
        <EllipsisVerticalIcon
          color={notification.read ? "#D4D1D1" : "#000000"}
        />
      </div>
    </div>
  );
}
export default NotificationSlice;
