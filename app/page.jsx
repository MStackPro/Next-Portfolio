import Stats from "@/components/Stats";
import Resume from "./resume/page";
import Services from "./services/page";
import Work from "./work/page";
import Contact from "./contact/page";
import Hero from "@/components/Hero";

// import Cv from "../app/assets/WalshakManassehCV.docx"
const Home = () => {
  return (
    <section className="h-full mt-32">
      {/* HERO */}
      <Hero/>

      {/* STATS */}
      <Stats />

      {/* Resume */}
      <Resume />

      {/* Services */}
      <Services />

      {/* Work */}
      <Work />

      {/* Contact */}
      <Contact />
    </section>
  );
};

export default Home;
