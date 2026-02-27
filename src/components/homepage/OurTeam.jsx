function OurTeam({}) {
  const team = [
    { index: 0, name: "John Doe", imgUrl: "/clarke.jpeg", role: "MD/CEO" },
    { index: 1, name: "John Doe", imgUrl: "/james.jpeg", role: "CFO" },
    {
      index: 2,
      name: "John Doe",
      imgUrl: "/edit.jpeg",
      role: "Executive Manager",
    },
    { index: 3, name: "John Doe", imgUrl: "/johnny.jpeg", role: "Supervisor" },
  ];
  return (
    <section className="bg-black/30 text-white p-8" id="team">
      <div>
        <h2 className="text-xl md:text-2xl  font-bold text-center pb-8 text-white uppercase">
          Our Team
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {team.map((member) => (
            <div
              key={member.index}
              className="flex flex-col flex-wrap  h-full  pb-4 w-full max-w-[280px]  items-center"
            >
              <div className="w-2/4 aspect-square mx-auto rounded-full overflow-hidden">
                <img
                  src={member.imgUrl}
                  alt={member.name}
                  className=" object-cover h-full w-full"
                  loading="lazy"
                />
              </div>
              <h3 className="pt-4 font-semibold ">{member.name}</h3>
              <p className="text-xs italic text-yellow-50">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OurTeam;
