
function Impact() {
  const stats = [
    {
      number: "50,000+",
      text: "Students & Citizens Reached",
    },
    {
      number: "8+",
      text: "Municipalities Served",
    },
    {
      text: "Schools, Colleges & Offices Supported",
    },
  ];

  return (
    <section className="bg-[#ecfff3] py-24 px-6">
      
      <div className="max-w-7xl mx-auto rounded-[32px] bg-gradient-to-r from-blue-800 via-teal-800 to-green-700 px-10 md:px-16 py-16 shadow-xl">
        <p className="text-white/90 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
          Real Environmental Impact
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
          Reanalyzing Old Collection Systems With Innovative Ideas
        </h2>

        <div className="flex justify-center mb-12">
          <img
            

            alt="Recycle"
            className="w-full max-w-4xl rounded-3xl object-cover shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/15 rounded-2xl px-8 py-8 backdrop-blur-sm"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {item.number}
              </h3>
              <p className="text-white/90 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;