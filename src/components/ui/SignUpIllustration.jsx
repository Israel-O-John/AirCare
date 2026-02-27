import { Link } from "react-router-dom";

function SignUpIllustration() {
  return (
    <main className="bg-[#DED9EB] hidden lg:block min-h-screen ">
      <div className="pl-20 py-20 flex flex-col gap-32">
        <Link to="/">
          <img src="/Logo.png" alt="Logo" />
        </Link>

        <div className=" mr-5 w-[418px]">
          <img src="/Repair Man.png" alt="Repair Man" className="w-full" />
        </div>
      </div>
    </main>
  );
}
export default SignUpIllustration;
