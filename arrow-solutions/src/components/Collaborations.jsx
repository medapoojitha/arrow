import f1 from "../assets/f-1.jpg";
import f2 from "../assets/F-2.jpg";
import f3 from "../assets/F-3.jpg";
import f4 from "../assets/F-4.jpg";
import f5 from "../assets/F-5.jpg";
import f6 from "../assets/F-5.jpg";
import img from "../assets/img.jpg";
function Collaborations() {
  const partners = [
    { img: f1, name: "Visvesvaraya College of Engineering" },
    { img: f2, name: "Methodist College of Engineering and Technology" },
    { img: f3, name: "Sai Spurthi Institute of Technology" },
    { img: f4, name: "Siddhartha Group of Institutions" },
    { img: f5, name: "St. Joseph Degree and PG College" },
    { img: f6, name: "Stanley College of Engineering and Technology" },
    { img: img, name: "Govt Degree College Manuguru" },
    { img: f1, name: "Swami Vivekananda Institute of Technology" },
    { img: f2, name: "Techieride NGO" },
    { img: f3, name: "Ecomy3" },
  ];

  return (
    <section className="bg-[#ecfff3] px-6 py-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-bold text-[#08612f] mb-5">
            Arroww Collaboration with Institutions, NGOs & Economy3
          </h2>

          <p className="text-[#405066] text-[21px] leading-[1.7] max-w-[900px] mx-auto">
            Arroww collaborates with municipalities, institutions, NGOs, and
            sustainability-focused organizations to drive responsible waste
            management and environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-7">
          {partners.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] border border-emerald-100 h-[230px] flex flex-col items-center justify-center px-6 shadow-sm"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-[90px] max-w-[210px] object-contain mb-8"
              />

              <h3 className="text-[#172033] text-[18px] font-semibold text-center leading-[1.5]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collaborations;