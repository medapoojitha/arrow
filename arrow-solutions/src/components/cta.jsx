import { ArrowRight } from "lucide-react";
import React from "react";
import recycle from "../assets/recycle.jpg";    

function Cta() {
    
  return (
    <section className="bg-[#ecfff3] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl px-10 py-10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-blue-500 text-sm font-semibold tracking-[0.25em] uppercase mb-5">
              Ready to Collaborate?
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              Build a zero-waste roadmap for your municipality or institution.
            </h2>
          </div>

          <button className="bg-gradient-to-r from-green-500 to-sky-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition">
            Schedule Consultation
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-20">
          <img
            src={recycle}
            alt="Recycle"
            className="w-44 h-44 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Cta;