
import ser from "../assets/ser.jpg";
function AboutSection() {
  return (
    <section className="bg-[#ecfff3] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div className="flex justify-center lg:justify-start lg:mt-10">
          <img
            src={ser}
            alt="Waste Management"
            className="w-full max-w-[560px] h-[720px] object-cover rounded-2xl"
          />
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 mb-6 leading-tight">
            About Arroww Waste Management Solutions
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Arroww provides comprehensive waste management services to reduce
            environmental footprint and support regulatory compliance. With
            innovation, efficiency, and responsible handling, we manage waste
            collection, recycling, dry and wet waste processing, and safe
            disposal for every client segment.
          </p>

          <div className="space-y-4 text-gray-600 text-base mb-10">
            <p>Compliance-first operations with strict environmental process control.</p>
            <p>Technology-enabled tracking for safer and more efficient waste handling.</p>
            <p>Cost-effective models that support long-term sustainability goals.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Aim of Arroww
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Protect nature and the environment by promoting source segregation,
              giving practical awareness, and creating employment through
              structured waste systems.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Who We Serve
            </h3>

            <ul className="space-y-3 text-gray-600 text-lg">
              <li>Municipalities and government programs</li>
              <li>Homes, apartments, and RWAs</li>
              <li>Gated communities and societies</li>
              <li>Industries and companies</li>
              <li>Schools, colleges, and offices</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
export default AboutSection;
