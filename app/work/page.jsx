"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { FaBehance } from "react-icons/fa6";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: " project",
    desc: "Zenith Agro allied corperative society",
    stack: [{ name: "React" }],
    image: require("/app/assets/Zenith.png"),
    live: "https://zenith-agro.vercel.app/",
    github: "https://github.com/MStackPro/Zenith-Agro",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "02",
    category: "frontend",
    title: " project",
    desc: "Manage",
    stack: [{ name: "React" }, { name: "Tailwind" }],
    image: require("/app/assets/manage.jpg"),
    live: "https://manage-landing-page-gilt-five.vercel.app/",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "03",
    category: "Branding",
    title: " project",
    desc: "Mstack Solutions",
    stack: [{ name: "Photoshop" }, { name: "Illustrator" }],
    image: require("/app/assets/mix-designs.png"),
    live: "#",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "04",
    category: "frontend",
    title: " project",
    desc: "Kekepay a tricycle revenue payment app",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: require("/app/assets/kekepay.png"),
    live: "#",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "05",
    category: "Branding",
    title: " project",
    desc: "Brand identity designs for KVE Africa",
    stack: [{ name: "Photoshop" }, { name: "Illustrator" }],
    image: require("/app/assets/kve21.PNG"),
    live: "#",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "06",
    category: "Branding",
    title: " project",
    desc: "Kay's Thrift and beauty stores",
    stack: [{ name: "Photoshop" }, { name: "Illustrator" }],
    image: require("/app/assets/k8.PNG"),
    live: "#",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "07",
    category: "frontend",
    title: " project",
    desc: "Noko social media",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: require("/app/assets/noko.png"),
    live: "#",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "08",
    category: "Frontend",
    title: " project",
    desc: "Mstack Solutions",
    stack: [{ name: "Figma" }, { name: "Illustrator" },{name: "Next.js"}, {name: "Tailwind"}, {name: "Material ui"},],
    image: require("/app/assets/Landing-page.png"),
    live: "#",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
  {
    num: "09",
    category: "Web Design",
    title: " project",
    desc: "Sorix Energy",
    stack: [{ name: "Photoshop" }, { name: "Illustrator" }],
    image: require("/app/assets/sorix-website.png"),
    live: "#",
    github: "#",
    behance: "https://www.behance.net/walshakmanasseh",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 xl:mt-32 mt-20 bg-[#19181f]"
      id="work"
    >
      <div className="container mx-auto">
      <p className="text-accent text-[17px] font-semibold mb-8">
          My Works
        </p>
        <div className="flex flex-col xl:flex-row xl:gap-[30]">
          <div className="w-full xl:w-[50%] h-fit flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className=" text-4xl xl:text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-3xl xl:text-[32px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60 text-sm">{project.desc}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm text-accent ">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-fit w-[95%] xl:w-[80%] flex flex-col items-center"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="">
                    <div className="h-[300px] w-full xl:h-[350px] relative group flex justify-center items-center rounded-lg overflow-hidden">
                      {/* overlay */}
                      {/* <div className="absolute top-0 bottom-0 w-fit h-full bg-green-500 z-10"></div> */}

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="project"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-4 justify-center mt-4"
              />
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
