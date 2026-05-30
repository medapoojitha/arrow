import {
  Trash2,
  Package,
  Recycle,
  Sprout,
  RefreshCw,
  Leaf,
} from "lucide-react";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#dff4df] py-24">

      {/* Background Icons */}
      <Leaf
        size={130}
        className="absolute -left-8 top-6 text-green-200 opacity-60"
      />

      <Recycle
        size={100}
        className="absolute right-10 top-5 text-cyan-200 opacity-60"
      />

      {/* Heading */}
      <div className="text-center mb-24">
        <h1 className="text-6xl font-bold text-[#0b5d2a]">
          How Our Waste Transformation Process Works
        </h1>
      </div>

      {/* Main Section */}
      <div className="relative max-w-[1500px] mx-auto h-[700px]">

        {/* SVG Dotted Curve */}
        <svg
  className="absolute top-[240px] left-0 w-full"
  viewBox="0 0 1500 300"
  fill="none"
>
  {/* Smooth Curved Green Line */}
  <path
    d="
      M100 180
      C220 260, 330 20, 520 120
      S760 260, 860 240
      S1080 20, 1140 70
      S1340 170, 1460 170
    "
    stroke="#22c55e"
    strokeWidth="4"
    strokeDasharray="7 12"
    strokeLinecap="round"
    fill="none"
  />

  {/* Dot 1 */}
  <g>
    <circle cx="100" cy="180" r="16" fill="#22c55e" />
    <text
      x="100"
      y="185"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      1
    </text>
  </g>

  {/* Dot 2 */}
  <g>
    <circle cx="520" cy="120" r="16" fill="#22c55e" />
    <text
      x="520"
      y="125"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      2
    </text>
  </g>

  {/* Dot 3 */}
  <g>
    <circle cx="860" cy="240" r="16" fill="#22c55e" />
    <text
      x="860"
      y="245"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      3
    </text>
  </g>

  {/* Dot 4 */}
  <g>
    <circle cx="1140" cy="70" r="16" fill="#22c55e" />
    <text
      x="1140"
      y="75"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      4
    </text>
  </g>

  {/* Dot 5 */}
  <g>
    <circle cx="1460" cy="170" r="16" fill="#22c55e" />
    <text
      x="1460"
      y="175"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      5
    </text>
  </g>
</svg>
        

        {/* STEP 1 */}
        <div className="absolute left-[4%] top-[420px] w-[240px]">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0b5d2a] mb-5">
            <Trash2 size={24} />
          </div>

          <h3 className="text-[30px] font-bold text-[#0b5d2a] mb-3">
            1. Collect
          </h3>

          <p className="text-gray-700 text-lg leading-9">
            Doorstep collection from households, institutions, and commercial sites.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="absolute left-[28%] top-[210px] w-[240px]">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0b5d2a] mb-5">
            <Package size={24} />
          </div>

          <h3 className="text-[30px] font-bold text-[#0b5d2a] mb-3">
            2. Segregate
          </h3>

          <p className="text-gray-700 text-lg leading-9">
            Dry and wet streams are sorted for optimized handling.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="absolute left-[48%] top-[390px] w-[250px]">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0b5d2a] mb-5">
            <Recycle size={24} />
          </div>

          <h3 className="text-[30px] font-bold text-[#0b5d2a] mb-3">
            3. Recycle
          </h3>

          <p className="text-gray-700 text-lg leading-9">
            Recoverable material is routed to authorized recyclers.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="absolute left-[66%] top-[160px] w-[250px]">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0b5d2a] mb-5">
            <Sprout size={24} />
          </div>

          <h3 className="text-[30px] font-bold text-[#0b5d2a] mb-3">
            4. Compost
          </h3>

          <p className="text-gray-700 text-lg leading-9">
            Wet waste is processed into compost at DRCC operations.
          </p>
        </div>

        {/* STEP 5 */}
        <div className="absolute right-0 top-[380px] w-[230px]">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0b5d2a] mb-5">
            <RefreshCw size={24} />
          </div>

          <h3 className="text-[30px] font-bold text-[#0b5d2a] mb-3">
            5. Reuse
          </h3>

          <p className="text-gray-700 text-lg leading-9">
            Useful outputs return to communities and circular systems.
          </p>
        </div>
      </div>
    </section>
  );
}