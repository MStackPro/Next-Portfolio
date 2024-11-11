import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Resume from "./resume/page";
import Services from "./services/page";
import Work from "./work/page";
import Contact from "./contact/page";
// import Cv from "../app/assets/WalshakManassehCV.docx"

const Home = () => {
  return (
    <section className="h-full mt-32">
      <div className="container mx-auto h-full">
        {/* HERO */}
        <div className="flex flex-col xl:flex-row items-center justify-between mt-12 xl:mt-12 xl:pb-12">
          {/* TEXT */}
          <div className="text-center xl:text-left">
            <div className="mb-6">
              <span className="">Hello I'm</span>
              <h1 className="h2 text-accent">Manasseh Walshak</h1>
            </div>
            <p className="max-w-[500px] mb-9 text-white text-sm">
              A passionate skilled Front-end Developer and Creative Graphic
              Designer.
            </p>

            {/* BUTTON AND SOCIALS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="md"
                  className="uppercase text-sm flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex items-center justify-center text-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>

          {/* PHOTO */}
          <div>
            <Photo />
          </div>
        </div>
      </div>

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
