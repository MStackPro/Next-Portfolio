"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiTailwindcss, SiNextdotjs, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

// About data
const about = {
  title: "About me",
  desc: "I'm a passionate, dedicated Front-end Developer and Creative Graphic Designer, with a strong work ethics and exceptional problem-solving abilities, I thrive in fast-paced environments. I'm highly adaptable, embracing change and always seeking new challenges to further develop my skills set. My combination of creativity, adaptability, and strong analytical skills makes me a valuable asset in front-end development, and a driving success in achieving goals.",
  info: [
    { fieldName: "Name", fieldValue: "Manasseh Walshak" },
    { fieldName: "Phone", fieldValue: "(+234) 810 601 7834" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email", fieldValue: "walshakmanasseh@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hausa" },
  ],
};
// Experience data
const experience = {
  icon: "",
  title: "My experience",
  desc: "",
  items: [
    {
      company: "Freelance",
      position: "Graphic Designer",
      duration: "2022 - Present",
    },
    {
      company: "Freelance",
      position: "Front-end Developer",
      duration: "2022 - Present",
    },
    {
      company: "Stems Multi-Global Engineering and Services Ltd. ",
      position: "Construction Intern",
      duration: "May 2021 - Sept. 2021",
    },
  ],
};
// Education data
const education = {
  icon: "",
  title: "My education",
  items: [
    {
      institution: "3MTT Nigeria",
      degree: "Software Engineering",
      duration: "January 2024 - April 2024",
    },
    {
      institution: "UNIVERSITY OF JOS, JOS NIGERIA",
      degree: "Bsc. in Building",
      duration: "2016 - 2021",
    },
    {
      institution: "Regalo Hope Foundation.",
      degree: "Graphic Design training",
      duration: "Sept. 2023 - Nov. 2023",
    },
    {
      institution: "ST. JOHN’S COLLEGE, JOS NIGERIA",
      degree: "SSCE",
      duration: "2010 - 2016",
    },
    {
      institution: "GLORIOUS CHILD ACADEMY, JOS NIGERIA",
      degree: "Primary School Leaving Certificate ",
      duration: "2004 - 2010",
    },   
  ],
};
// Skills data
const skills = {
  title: "My skills",
  desc: "Skills both in Graphic design and web development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Photoshop",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:p-0 xl:mt-28"
      id="resume"
    >
      <div className="container mx-auto">
        <p className="text-accent text-[17px] font-semibold"> My Resume</p>
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] mt-6"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[130px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm uppercase">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[130px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[350px] min-h-[40px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 uppercase text-sm">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-left xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 xl:mx-0">
                    {skills.desc}
                  </p>
                </div>

                <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 xl:gap-[20px] gap-y-8">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-20 h-20 bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-4xl hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-3 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 text-sm">
                          {item.fieldName}
                        </span>
                        <span>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
