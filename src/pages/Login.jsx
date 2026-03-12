import { Link, useNavigate } from "react-router-dom";
import SignUpIllustration from "../components/ui/SignUpIllustration";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/home");
  }

  return (
    <div className="flex min-h-screen">
      <SignUpIllustration />
      <div className="md:w-3/4 mx-auto">
        <div className="mx-auto py-9 w-3/4 max-w-[530px] space-y-12">
          <div className="ml-auto w-fit flex gap-1 md:gap-4 flex-wrap items-center text-lg font-ligh">
            <p>Are you new to AirCare? </p>
            <Link
              to="/signup"
              className="font-normal text-blue-600 hover:text-blue-700"
            >
              Sign Up
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welcome back to AirCare</h2>
            <p className="text-base font-light">Login for AirCare</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <label htmlFor="email">Email address:</label>
              <input
                id="email"
                type="email"
                placeholder="E.g email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password">Password:</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="E.g Password123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span onClick={toggleShowPassword}>
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>

            <button className="text-white bg-blue-700 rounded-lg py-2  w-full text-2xl font-medium mt-6 hover:text-blue-700 hover:border hover:bg-white">
              Login
            </button>
            <p className="text-base text-center mt-4 font-light">
              Forgot Password?
              <Link
                to="/forgot-password"
                className="text-blue-600 pl-2 hover:text-inherit"
              >
                Click Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
