import img from "../assets/img.jpg";
import {
  Send,
  Leaf,
  Trash2,
  Recycle,
  Globe,
  Phone,
  Mail,
} from "lucide-react";

function Footerr() {
  return (
    <>
      {/* Top CTA Section */}
      <section className="bg-[#ecfff3] px-6 pt-8 pb-32">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-green-500 to-sky-500 rounded-[32px] text-center text-white px-6 py-16 relative overflow-hidden shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build a Greener Future Together
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            Collaborate with Arroww for municipality awareness programs, DRCC
            support, source segregation, and responsible waste collection that
            moves communities toward zero waste.
          </p>

          <button className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-3">
            <Send size={20} />
            Contact
          </button>

          <div className="absolute right-14 bottom-[-20px] text-green-900 opacity-70">
            <Leaf size={90} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-blue-800 via-teal-900 to-green-800 text-white px-6 py-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Left */}
          <div>
            <img
  src={img}
  alt="Arroww Logo"
  className="w-28 bg-white rounded-md mb-6"
/>

            <p className="text-white/90 leading-relaxed mb-6">
              Arroww Waste Management Solutions delivers end-to-end sustainable
              waste handling for municipalities, communities, corporates, and
              institutions.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="border border-white/30 px-4 py-2 rounded-full text-sm inline-flex items-center gap-2">
                <Leaf size={15} /> Eco Friendly
              </span>

              <span className="border border-white/30 px-4 py-2 rounded-full text-sm inline-flex items-center gap-2">
                <Trash2 size={15} /> Waste Management
              </span>

              <span className="border border-white/30 px-4 py-2 rounded-full text-sm inline-flex items-center gap-2">
                <Recycle size={15} /> Recycling
              </span>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                f
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                ◎
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                in
              </div>
            </div>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-white/90">
              <p>› Services</p>
              <p>› Impact</p>
              <p>› About</p>
              <p>› Process</p>
              <p>› Gallery</p>
              <p>› Partners</p>
              <p>› Contact Us</p>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-5">
              Arroww Main Office
            </h3>

            <div className="space-y-4 text-white/90">
              <p className="flex gap-3">
                <Globe size={20} />
                Vanasthalipuram, TV Colony 4th Phase, Plot No. 6-4-117, Pin
                500070
              </p>

              <p className="flex gap-3">
                <Phone size={20} />
                +91 94418 26106
              </p>

              <p className="flex gap-3">
                <Mail size={20} />
                arrowwwastemanagement@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-12 top-0 translate-y-[-50%] w-28 h-28 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
          <Recycle size={50} className="text-white/60" />
        </div>
      </footer>
    </>
  );
}

export default Footerr;