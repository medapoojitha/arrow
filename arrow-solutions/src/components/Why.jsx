// src/components/Why.jsx
import {
  Truck,
  PackageCheck,
  Sprout,
  ShieldCheck,
  BookOpen,
  BadgeCheck,
  Recycle,
  Leaf,
} from "lucide-react";

function Why() {
  const services = [
    {
      title: "Doorstep Waste Collection",
      desc: "Collection from homes, apartments, offices, schools, colleges, industries, and commercial establishments at customer convenience.",
      icon: Truck,
    },
    {
      title: "Source Segregation & Dry Waste Processing",
      desc: "Segregation of municipality dry waste into categories and transfer of recoverable material to authorized recyclers.",
      icon: PackageCheck,
      active: true,
    },
    {
      title: "Wet Waste Composting",
      desc: "Processing wet waste at DRCC areas, producing compost, and supplying compost output for agricultural use.",
      icon: Sprout,
    },
    {
      title: "DRCC Management",
      desc: "Maintaining municipality DRCC centers with documented processes and operational controls aligned to environmental standards.",
      icon: ShieldCheck,
    },
    {
      title: "Awareness & RWA Programs",
      desc: "Free awareness in schools, colleges, colonies, and municipalities with RWA, community championship, and exchange programs.",
      icon: BookOpen,
    },
    {
      title: "Swachh Sarvekshan Activities",
      desc: "Execution support for Swachh Sarvekshan activities as per CDMA guidelines in participating municipalities.",
      icon: BadgeCheck,
    },
    {
      title: "Recycling & Material Recovery",
      desc: "End-to-end recycling of paper, plastic, glass, and metal streams with a strong focus on landfill reduction.",
      icon: Recycle,
    },
    {
      title: "Tender Coconut Waste Processing",
      desc: "Processing tender coconut waste into usable coir and coco-pit products as part of circular resource recovery.",
      icon: Leaf,
    },
  ];

  return (
    <section className="bg-[#ecfff3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          Integrated Services For Circular Waste Management
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mb-12 leading-relaxed">
          We combine education, systems design, and operational excellence to
          create measurable environmental outcomes across institutions and urban
          communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 min-h-[230px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.active ? "border border-emerald-300" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8">
                  <Icon className="w-6 h-6 text-green-800" />
                </div>

                <h3 className="text-xl font-semibold text-green-800 mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Why;