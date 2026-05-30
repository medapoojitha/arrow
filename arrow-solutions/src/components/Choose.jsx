import { ShieldCheck, BadgeCheck, Users, Lightbulb } from "lucide-react";

function Choose() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Compliance-Ready Systems",
      desc: "Process design aligned with municipality and environmental standards.",
    },
    {
      icon: BadgeCheck,
      title: "Proven Field Execution",
      desc: "Hands-on DRCC, segregation, and composting operations with measurable outcomes.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      desc: "School, college, and RWA awareness programs that drive behavior change.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Led Approach",
      desc: "Reanalyzing old waste systems with practical, low-cost operational innovation.",
    },
  ];

  return (
    <section className="bg-[#ecfff3] pt-28 pb-12 px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[44px] font-bold text-[#08612f] mb-6">
            Why Choose Arroww
          </h2>

          <p className="text-[#405066] text-[21px] leading-[1.7] max-w-[920px] mx-auto">
            We combine local execution expertise, compliance-first operations,
            and community-focused awareness to create practical and scalable
            environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-7">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[18px] px-7 py-7 h-[245px] shadow-[0_15px_35px_rgba(0,0,0,0.04)]"
              >
                <div className="w-[56px] h-[56px] rounded-[18px] bg-[#d8f8f1] flex items-center justify-center mb-7">
                  <Icon className="w-6 h-6 text-[#08612f]" />
                </div>

                <h3 className="text-[22px] font-semibold text-[#08612f] mb-5">
                  {item.title}
                </h3>

                <p className="text-[#405066] text-[16px] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Choose;