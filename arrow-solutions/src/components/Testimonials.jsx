import { Quote, Leaf } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
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
    <section className="bg-[#dff4df] py-24 px-6">
      <div className="max-w-[1700px] mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold text-[#0b5d2a] mb-6">
            What Our Partners Say
          </h1>

          <p className="text-[34px] leading-[60px] text-[#3f4f63] max-w-[1100px]">
            Trusted by municipalities, institutions, and communities for
            consistent on-ground execution and measurable sustainability
            outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#eaf5ea] border border-[#cdeed5] rounded-[36px] p-10 overflow-hidden shadow-sm"
            >
              {/* Decorative Leaves */}
              <Leaf
                size={90}
                className="absolute -top-3 -right-3 text-[#b9f0cb]"
              />

              <Leaf
                size={70}
                className="absolute -bottom-3 -left-3 text-[#d5f7df]"
              />

              {/* Partner Voice Badge */}
              <div className="inline-flex items-center gap-3 border border-[#b7e9c7] rounded-full px-5 py-2 text-[#00805a] text-sm font-semibold mb-10 bg-[#eefaf1]">
                <Leaf size={16} />
                PARTNER VOICE
              </div>

              {/* Quote Icon */}
              <Quote
                size={34}
                className="text-[#009966] mb-8"
              />

              {/* Testimonial Text */}
              <p className="text-[18px] leading-[44px] text-[#2c3b4d] mb-10">
                {item.text}
              </p>

              {/* Name */}
              <h3 className="text-[30px] font-bold text-[#004d36] mb-1">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-[18px] text-[#506070]">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}