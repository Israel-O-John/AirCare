import { useState } from "react";
import IconBar from "./IconBar";

const fields = [
  { label: "Names", type: "text", id: "name" },
  { label: "Email address", type: "email", id: "email" },
  { label: "Phone Number", type: "tel", id: "phoneNumber" },
  { label: "Address", type: "text", id: "address" },
  { label: "Password", type: "password", id: "password" },
  { label: "Confirm Password", type: "password", id: "confirmPassword" },
];

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
  confirmPassword: "",
  profileImage: null,
};

function Settings() {
  const [profileImg, setProfileImg] = useState("/Profile pic.png");

  const [formData, setFormData] = useState(initialState);

  function handleFormDataUpdate(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleRequest = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords must match");
      return;
    }
    setFormData(initialState);
    console.log(formData);
  };

  function handleImgChg(e) {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setProfileImg(imageUrl);

    setFormData({
      ...formData,
      profileImage: file,
    });
  }

  function rmImage() {
    setProfileImg("/Profile pic.png");

    setFormData({
      ...formData,
      profileImage: null,
    });
  }

  return (
    <div>
      <main className="mt-4 bg-white p-8 shadow-[4px_4px_8px_0px_#00000040]">
        <form
          className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 max-w-5xl mx-auto "
          onSubmit={handleRequest}
        >
          <div className="flex mr-auto gap-8 items-center lg:col-span-2 mb-8">
            <div className="w-14 h-14">
              <img
                src={profileImg}
                alt="profile image"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <input
                type="file"
                name="profileImage"
                id="profileImg"
                className="hidden"
                accept="image/*"
                onChange={handleImgChg}
              />
              <label
                htmlFor="profileImg"
                className="text-base font-medium px-3 py-[2px]  rounded-md text-blue-700 bg-[#D9D9D9] cursor-pointer hover:bg-white "
              >
                Upload
              </label>
              <button
                className="text-base font-medium px-3 py-[2px] bg-[#D9D9D9] cursor-pointer rounded-md hover:bg-white"
                onClick={rmImage}
                type="button"
              >
                Remove
              </button>
            </div>
          </div>

          {fields.map((field) => (
            <div key={field.id} className="form-group">
              <label htmlFor={field.id}>{field.label}:</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleFormDataUpdate}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="text-xs md:text-xl font-medium py-2 w-full rounded-md bg-[#525FFD] hover:bg-blue-700 transition-colors duration-300 text-white lg:col-span-2 mt-12"
          >
            Update Settings
          </button>

          <div className="space-y-2 lg:col-span-2">
            <h4 className=" md:text-xl font-medium text-[#393943]">
              Delete account?
            </h4>
            <p className="md:text-lg text-[#393943] font-normal">
              By deleting your account, you will no longer receiving AC repair
              and maintenance via our website{" "}
            </p>
            <button className="text-[#EA0703] font-medium md:text-xl">
              Delete Account
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
export default Settings;
