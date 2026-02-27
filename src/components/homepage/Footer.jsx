import { Linkedin, Facebook, Instagram } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    {
      section: "Home",
      sectionLink: "#home",
    },
    {
      section: "Services",
      sectionLink: "#services",
    },

    {
      section: "About us",
      sectionLink: "#about",
    },
    {
      section: "Our Team",
      sectionLink: "#team",
    },
    {
      section: "Contact us",
      sectionLink: "#contact",
    },
  ];

  const agencyServices = [
    "AC Maintenance",
    " AC Repair",
    "AC Installation",
    "Thermostat Repair",
    "AC Systems Supply",
    "Conduit Piping",
    "Consultancy and Load Calculations",
  ];
  return (
    <footer className="bg-black/30 text-white p-8" id="contact">
      <div className="flex flex-wrap gap-8  md:justify-center mx-auto justify-between md:max-w-6xl  ">
        <div className="flex flex-col md:items-center ">
          <div>
            <img src="/Logo.png" alt="Logo" />
          </div>
          <p className="text-xs pb-4">Get in touch with AirCare Services</p>
          <ul className="flex gap-2">
            <Linkedin
              size={20}
              className=" cursor-pointer hover:text-blue-200 transition-colors duration-300"
              href="linkedin.com"
            />
            <Facebook
              size={20}
              className=" cursor-pointer hover:text-blue-200 transition-colors duration-300"
            />
            <Instagram
              size={20}
              className=" cursor-pointer hover:text-blue-200 transition-colors duration-300"
            />
          </ul>
        </div>

        <div className="md:ml-32">
          <h4 className="font-semibold text-lg ">Our Company</h4>
          <div className="flex flex-col">
            {pageLinks.map((link) => (
              <p
                key={link.section}
                className="text-sm cursor-pointer hover:text-blue-200 transition-colors duration-300 mt-2 w-fit "
              >
                <a href={link.sectionLink}>{link.section}</a>
              </p>
            ))}
          </div>
        </div>

        <div className="md:ml-32">
          <h4 className="font-semibold text-lg">Our Services</h4>
          <div>
            {agencyServices.map((service) => (
              <p
                key={service}
                className="text-sm mt-2 w-fit cursor-pointer hover:text-blue-200 transition-colors duration-300"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border w-full mt-8 pt-4 text-center">
        <p className="text-sm">© {currentYear} AirCare</p>
      </div>
    </footer>
  );
}
export default Footer;
