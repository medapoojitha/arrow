import { Leaf } from "lucide-react";

function Partners() {
  const reviews = [
    {
      text: "Arroww helped us improve source segregation and DRCC efficiency in a structured way. The awareness programs created visible behavior change.",
      name: "Municipality Program Officer",
      role: "Urban Local Body Partner",
    },
    {
      text: "Their school awareness sessions are practical and engaging. Students now actively participate in recycling and segregation activities.",
      name: "Academic Coordinator",
      role: "Partner School Network",
    },
    {
      text: "Reliable doorstep collection and transparent processing gave our RWA confidence in long-term sustainable waste handling.",
      name: "Resident Welfare Association Lead",
      role: "Community Partner",
    },
  ];

  return (
    <section className="bg-[#ecfff3] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            What Our Partners Say
          </h2>

          <p className="text-gray-600 text-xl leading-relaxed max-w-4xl">
            Trusted by municipalities, institutions, and communities for
            consistent on-ground execution and measurable sustainability
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/70 border border-emerald-100 rounded-2xl px-8 py-8 min-h-[250px] shadow-sm overflow-hidden"
            >
              <div className="inline-flex items-center gap-2 border border-emerald-200 rounded-full px-4 py-2 text-sm font-semibold tracking-wider text-green-700 mb-7">
                <Leaf size={15} />
                PARTNER VOICE
              </div>

              <div className="text-5xl text-emerald-600 leading-none mb-5">
                ”
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {item.text}
              </p>

              <div>
                <h3 className="text-green-800 font-bold text-lg">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.role}</p>
              </div>

              <Leaf className="absolute -right-3 top-3 w-20 h-20 text-emerald-100" />
              <Leaf className="absolute -left-3 -bottom-3 w-16 h-16 text-lime-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;