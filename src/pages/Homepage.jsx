import { useRef } from "react";
import About from "../components/homepage/About";
import Blogs from "../components/homepage/Blogs";
import Footer from "../components/homepage/Footer";
import Hero from "../components/homepage/Hero";
import NavBar from "../components/homepage/NavBar";
import OurTeam from "../components/homepage/OurTeam";
import Partners from "../components/homepage/Partners";
import Services from "../components/homepage/Services";
import Testimonials from "../components/homepage/Testimonials";

function Homepage() {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <Partners />
        <Services />
        <About />
        <Testimonials />
        <OurTeam />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}
export default Homepage;
