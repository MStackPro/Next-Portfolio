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
import { SiTypescript } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { fadeIn } from "@/components/motions/variants";

// About data
const about = {
  title: "About me",
  desc: "Am a Frontend Developer with a sharp eye for clean UI, seamless UX, and scalable architecture. I specialize in building modern, responsive web interfaces using React, TypeScript, Tailwind CSS, and Next.js no shortcuts, no fluff, just clean, performant code. I’m not just a coder, I think like a product owner. I focus on building user-centric experiences that align with business goals. I’ve collaborated closely with designers, backend engineers, and QA teams to bring full-featured dashboards, e-commerce platforms, and admin systems to life. If something breaks, I don’t wait around I dig in, debug, and deliver. Right now, I’m sharpening my backend chops with Node.js, and I’m no stranger to tools like Prisma, PostgreSQL, or Firebase. I’m also exploring mobile dev with React Native, and I’m involved in product testing and QA processes to ensure end-to-end quality. Whether you’re building a startup MVP, refining your SaaS UI, or need someone to bring structure and sanity to your frontend codebase I’m your guy. I don’t just execute tasks, I ask the right questions, challenge assumptions, and help you build smarter. Let’s build something people actually want to use.",
};
// Experience data
const experience = {
  icon: "",
  title: "My experience",
  desc: "",
  items: [
    {
      company: "O'range Development consult",
      position: "Junior QA Engineer",
      duration: "April 2025 - Present",
    },
    {
      company: "Belsoft Systems",
      position: "Frontend Developer",
      duration: "2024 - Present",
    },
    {
      company: "Freelance",
      position: "Graphic Designer",
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
      icon: <SiTypescript />,
      name: "Typescript",
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
    <section
      className="min-h[80vh] flex items-center justify-center py-12 xl:p-0 xl:mt-32 mt-20 bg-[#19181f]"
      id="resume"
    >
      <div className="container mx-auto pt-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Resume
        </motion.h2>
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] mt-6"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-0 gap-4">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-6 text-left">
                <h3 className="font-semibold text-accent capitalize">{experience.title}</h3>

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
                            <p className="text-white/60 text-sm leading-5 uppercase">{item.company}</p>
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
              <div className="flex flex-col gap-6 text-left">
                <h3 className="font-semibold text-accent capitalize">{education.title}</h3>

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
                <div className="flex flex-col gap-6 text-left xl:text-left">
                  <h3 className="font-semibold text-accent capitalize">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 xl:mx-0 text-sm">
                    {skills.desc}
                  </p>
                </div>

                <ul className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 mx-auto">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-20 h-20 bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-3xl hover:text-accent transition-all duration-300">
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
              <div className="flex flex-col gap-6">
                <h3 className="font-semibold text-accent capitalize">{about.title}</h3>
                <p className="text-[14px] lg:text-[15px] text-white mx-auto max-w-[49rem] w-full">
                  {about.desc}
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
