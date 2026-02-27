import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center relative "
      style={{ backgroundImage: "url('/AC.jpeg')" }}
      id="home"
    >
      <div className="absolute inset-0 bg-blue-700/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2 py-8 max-w-6xl mx-auto px-6">
        <h2 className="uppercase text-center text-xl md:text-3xl text-white font-bold">
          Expert in Ac repair and maintenance
        </h2>
        <p className="text-gray-200 pb-8 md:text-lg text-center">
          Stay cool and comfortable all year round with our expert AC repair and
          maintenace services. <br />
          We're here to keep your air conditioner running at it's best, ensuring
          optimal performance and energy efficiency.
        </p>
        <Link
          to="/signup"
          className="py-1 px-6 rounded-md text-sm font-medium bg-yellow-400 text-white"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
export default Hero;
