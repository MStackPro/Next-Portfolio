import Stats from "@/components/Stats";
import Resume from "./resume/page";
import Services from "./services/page";
import Work from "./projects/page";
import Contact from "./contact/page";
import Hero from "@/components/Hero";

// import Cv from "../app/assets/WalshakManassehCV.docx"
const Home = () => {
  return (
    <section className="pt-20">
      {/* HERO */}
      <Hero/>

      {/* STATS */}
      <Stats />

      {/* Resume */}
      <Resume />

      {/* Work */}
      <Work />

      {/* Contact */}
      <Contact />
    </section>
  );
};

export default Home;
