function Partners({}) {
  const partners = [
    { name: "ACE", url: "/ACE Logo.png" },
    { name: "Spark", url: "/Spark logo.png" },
    { name: "Alpha", url: "/Alpha logo.png" },
    { name: "Airbone", url: "/Airbone logo.png" },
  ];
  return (
    <div
      className="flex gap-6 flex-wrap py-6 justify-center md:justify-between items-center max-w-6xl mx-auto px-6"
      id="appointment"
    >
      {partners.map((partner) => (
        <img
          key={partner.name}
          src={partner.url}
          alt={partner.name}
          loading="lazy"
        />
      ))}
    </div>
  );
}
export default Partners;
