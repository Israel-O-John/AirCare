// import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import ForgotPassword from "./pages/ForgotPassword";
import MainApp from "./pages/MainApp";
import Dashboard from "./components/app/Dashboard";

// const Homepage = lazy(() => import("./pages/Homepage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/terms-and-conditions",
    element: <Terms />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/main-app",
    element: <MainApp />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
