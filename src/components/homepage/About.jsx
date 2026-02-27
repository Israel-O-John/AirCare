function About({}) {
  const mnIsion = [
    {
      name: "Mission",
      description:
        "At AirCare, our mission is to deliver exceptional HVAC and air conditioning solutions that go beyond customer expectations, ensuring comfort, efficiency, and reliability in every space we serve. We are committed to providing world-class maintenance, repair, installation, and consultancy services, tailored to the unique needs of each client. Guided by our values of quality, innovation, and customer satisfaction, we strive to create comfortable and sustainable indoor environments for both residential and commercial clients.",
    },
    {
      name: "Vision",
      description:
        "At AirCare, our vision is to set the benchmark in the HVAC industry by continuously enhancing our services and embracing cutting-edge technologies. We aim to be recognized for our expertise, professionalism, and ability to deliver tailored solutions that meet the evolving needs of our clients. As we grow, we aspire to expand our reach and impact, positioning PrimeCool Tech as the trusted provider of choice for HVAC and air conditioning services in Lagos and beyond.",
    },
  ];

  return (
    <section className="bg-black/30 text-white p-16" id="about">
      <h2 className="text-xl md:text-2xl  font-bold text-center pb-8">
        About us
      </h2>
      {/* Desktop */}
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-8 md:justify-between max-w-6xl mx-auto px-6 ">
        {mnIsion.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-justify md:px-16 pt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default About;
