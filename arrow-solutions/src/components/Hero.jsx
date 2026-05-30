import { Recycle } from "lucide-react";
import Heropg from "../assets/heropg.jpeg";

function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center overflow-hidden"
      
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-between px-6 lg:px-14">
        
        {/* LEFT SIDE */}
        <div className="max-w-4xl text-white">

          {/* Small Badge */}
          <div className="inline-block bg-white px-6 py-3 rounded-full mb-8">
            <p className="text-green-700 text-sm tracking-wide font-medium">
              SUSTAINABLE IMPACT, MEASURABLE RESULTS
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-[70px] leading-[1.1] font-light">
            Save Trees - Save
            <br />
            Nature.
            <br />
            Transform Waste Into
            <br />
            Value.
          </h1>

          {/* Description */}
          <p className="mt-10 text-[20px] leading-10 text-gray-200 max-w-5xl">
            Arroww provides end-to-end waste management solutions for
            municipalities, gated communities, homes, corporates,
            schools, colleges, and offices - with a strong focus
            on source segregation, awareness, and zero-waste outcomes.
          </p>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="hidden lg:flex items-center justify-center">
          
          <div className="relative w-[760px] h-[560px] rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-md">

            {/* Big Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-green-300 flex items-center justify-center">
              
              <Recycle
                size={100}
                className="text-green-400"
                strokeWidth={1.8}
              />
            </div>

            {/* Bottom Cards */}
            <div className="absolute bottom-8 left-10 flex gap-6">

              {/* Card 1 */}
              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl px-10 py-6 text-white w-[260px]">
                
                <p className="text-sm uppercase text-gray-300 font-medium">
                  Active Municipalities
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  8+
                </h2>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl px-10 py-6 text-white w-[260px]">
                
                <p className="text-sm uppercase text-gray-300 font-medium">
                  Core Mission
                </p>

                <h2 className="text-4xl font-bold mt-3">
                  Zero Waste
                </h2>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;