import { useState } from "react";
import { X, Menu } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function NavBar({}) {
  const [isMenu, setIsMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Appointments", href: "#appointment" },
    { name: "Contact us", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 right-0 left-0 z-50 md:text-sm text-xl px-2 font-medium  bg-white">
      <div className="flex md:px-8 md:py-4 py-4 justify-between max-w-6xl mx-auto px-6">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex container items-center pl-4">
          <ul className="flex space-x-8 mx-auto items-center">
            {navLinks.map((link) => (
              <button key={link.name}>
                <a href={link.href}> {link.name}</a>
              </button>
            ))}
            <div className="flex justify-center gap-2 items-center space-x-8 pl-2 flex-wrap ">
              <Link to="/login" className="text-blue-700">
                Log In
              </Link>
              <Link
                to="/signup"
                className="text-white py-1 px-4  rounded-lg bg-blue-700"
              >
                Sign up
              </Link>
            </div>
          </ul>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenu(!isMenu)}>
          {isMenu ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav */}
        {isMenu && (
          <nav className="absolute top-full left-0 right-0 border-b md:hidden bg-white h-screen">
            <ul className="container mx-auto px-4 py-2 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-left justify-start"
                  onClick={() => setIsMenu(!isMenu)}
                >
                  <a href={link.href}> {link.name}</a>
                </li>
              ))}
              <div className="flex justify-between items-center flex-wrap gap-2 mt-auto">
                <Link to="/login" className="text-blue-700">
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="text-white py-1 px-4  rounded-lg bg-blue-700"
                >
                  Sign up
                </Link>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
export default NavBar;
