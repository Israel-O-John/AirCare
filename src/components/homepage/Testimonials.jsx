function Testimonials({}) {
  const ratings = [
    {
      name: "5+",
      description: "Years Experience",
    },
    { name: "3000+", description: "Happy Customers" },
    { name: "100%", description: "Satisfaction Rate" },
    { name: "24/7", description: "Emergency Service" },
  ];

  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className=" text-xl md:text-2xl text-black  font-bold text-center">
          What Clients Say
        </h2>
        <div className="flex flex-wrap items-center gap-8 justify-center md:justify-between pt-16 pb-16">
          {ratings.map((rating) => (
            <div key={rating.name} className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-blue-500">
                {rating.name}
              </h3>
              <p className="text-sm "> {rating.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
