function Services({}) {
  const services = [
    {
      title: "AC REPAIR",
      imgUrl: "/Ac repair.png",
      description:
        " We diagnose and fix AC problems promptly,ensuring your home stays cool and comfortable. With our expertis we'll have your AC up and running in no time",
      btnText: "Hire Us",
    },
    {
      title: "AC MAINTENANCE",
      imgUrl: "/Ac maintenance.png",
      description:
        "Our expert technicians will provide thorough inspections, cleaning, and tune-ups to  maximize your AC's performance and extend its lifespan.",
      btnText: "Hire Us",
    },
    {
      title: "AC REPLACEMENT",
      imgUrl: "/Ac replace.png",
      description:
        "Upgrade to ultimate cooling comfort with our top-of-the-line AC replacement services. Say goodbye to outdated, and hello to advanced, energy-efficient technology",
      btnText: "Hire Us",
    },
  ];
  return (
    <section className="bg-gray-100 pb-12" id="services">
      <h2 className="uppercase text-xl md:text-2xl text-black  font-bold text-center underline decoration-yellow-400 decoration-4 underline-offset-8 pb-16 pt-16 md:pt-32">
        Services
      </h2>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col h-full shadow-md  space-y-4 pb-4 rounded-lg  bg-white w-full max-w-[375px]"
          >
            <img
              src={service.imgUrl}
              alt={service.title}
              className="w-full object-cover rounded-lg "
              loading="lazy"
            />
            <div className="flex flex-col  p-4 flex-1">
              <h2 className="uppercase text-3xl font-bold text-center">
                {service.title}
              </h2>
              <p className="px-2 mt-4 flex-1 text-base">
                {service.description}
              </p>
              <button className="text-xl mt-6 font-bold text-blue-500 px-8 py-3 rounded-md bg-yellow-500">
                {service.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
