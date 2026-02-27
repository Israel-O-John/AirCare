function Blogs({}) {
  const blogs = [
    {
      index: 0,
      title: "5 Signs Your Air Conditioner Needs Immediate Repair",
      content:
        "Is your AC making strange noises, blowing warm air, or causing your energy bills to spike? These are common warning signs that your system needs professional attention.",
      img: "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg",
    },
    {
      index: 1,
      title: "How Regular AC Maintenance Saves You Money Long-Term",
      content:
        " From improving energy efficiency to extending your unit’s lifespan, scheduled servicing prevents unexpected failures.",
      img: "https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg",
    },

    {
      index: 2,
      title: "Choosing the Right Air Conditioning System for Your Home",
      content:
        "Not all AC systems are created equal. Whether you're considering a split system, central air, or ductless mini-split, selecting the right unit depends on your home size, budget, and energy goals.",
      img: "https://images.pexels.com/photos/4283837/pexels-photo-4283837.jpeg",
    },
    {
      index: 3,
      title: "Energy-Saving Tips to Keep Your Home Cool in Peak Summer",
      content:
        "From smart thermostat settings to proper insulation and airflow management, discover practical tips that help you stay cool without overworking your air conditioning system.",
      img: "https://images.pexels.com/photos/19277413/pexels-photo-19277413.jpeg",
    },
  ];

  return (
    <section className="bg-gray-100 p-8 md:p-16 ">
      <div className="max-w-6xl mx-auto ">
        <h2 className="uppercase text-xl md:text-2xl text-black  font-bold text-center pb-16">
          Trendy News
        </h2>
        <div className="flex flex-col md:flex-row gap-8 snap-y overflow-y-auto md:snap-x snap-mandatory md:overflow-x-auto scroll-smooth h-[500px] md:h-[480px] no-scrollbar">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="snap-center       
            flex-shrink-0
            w-full 
            md:w-1/3
            bg-white 
            p-6 
            rounded-lg h-full
            flex flex-col"
            >
              <div>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-4 font-bold">{blog.title}</h4>
              <p className="text-sm text-gray-600 mt-4">{blog.content}</p>

              <button className="text-xs bg-yellow-200/40 text-blue-500 py-2 px-3 rounded-lg font-bold mt-auto hover:bg-yellow-500 max-w-24">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blogs;
