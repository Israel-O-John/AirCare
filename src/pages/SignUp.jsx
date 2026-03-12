import { Link, useNavigate } from "react-router-dom";
import SignUpIllustration from "../components/ui/SignUpIllustration";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    } else {
      setError("");
      setUsername("");
      setEmail("");
      setNumber("");
      setPassword("");
      setConfirmPassword("");
    }
    navigate("/home");
  }

  return (
    <div className="flex min-h-screen">
      <SignUpIllustration />
      <div className="md:w-3/4 mx-auto">
        <div className="mx-auto py-9 w-3/4 max-w-[530px] space-y-6">
          <div className="ml-auto w-fit flex gap-1 md:gap-4 flex-wrap items-center text-lg font-light">
            <p>Already have an account? </p>
            <Link
              to="/login"
              className="font-normal text-blue-600 hover:text-blue-700"
            >
              Sign In
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welcome to AirCare</h2>
            <p className="text-base font-light">Register for AirCare</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <label htmlFor="username">Names:</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your names..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="email">Email address:</label>
              <input
                id="email"
                type="email"
                placeholder="E.g email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="numer">Phone number:</label>
              <input
                id="number"
                type="number"
                placeholder="E.g +2348109728180"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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

              <label htmlFor="confirm-password">Confirm password:</label>

              <div className="password-wrapper">
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="E.g Password123"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span onClick={toggleShowConfirmPassword}>
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>
            {error && <p>{error}</p>}
            <button className="text-white bg-blue-700 rounded-lg py-2  w-full text-2xl font-medium mt-6 hover:text-blue-700 hover:border hover:bg-white">
              Register
            </button>
            <p className="text-base text-center mt-4 font-light">
              By registering you accept out{" "}
              <Link
                to="/terms-and-conditions"
                className="text-blue-600 hover:text-inherit"
              >
                terms and conditions
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
