import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      {/* Services Section */}
      <div className="bg-gray-100 py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <ServiceCard
            icon="💻"
            title="Web Development"
            description="We build responsive and modern websites for businesses."
          />

          <ServiceCard
            icon="🎨"
            title="UI/UX Design"
            description="Creative and user-friendly designs for better experience."
          />

          <ServiceCard
            icon="📱"
            title="App Development"
            description="Mobile applications with high performance and scalability."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;