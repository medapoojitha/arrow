import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Why from "../components/Why";
import Cta from "../components/Cta";
import Impact from "../components/Impact";
import AboutSection from "../components/AboutSection";
import Choose from "../components/Choose";
import Process from "../components/Process";
import Footer from "../components/Footerr";
import Partners from "../components/Partners";
import Collaborations from "../components/Collaborations";




function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <ServiceCard />
      <Cta />
      <Impact />
      <AboutSection />
      <Choose />
      <Process />
      
      <Partners />
      <Collaborations />
      <Footer />


    </div>
  );
}

export default Home;