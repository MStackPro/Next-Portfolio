import Stats from "@/components/Stats";
import Resume from "./resume/page";
import Work from "./projects/page";
import Contact from "./contact/page";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <section>
      {/* HERO */}
      <Hero/>

      {/* STATS */}
      <Stats />

      {/* Resume */}
      <Resume />

      {/* Projects */}
      <Work />

      {/* Contact */}
      <Contact />
    </section>
  );
};

export default Home;
