import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

// About data
export const about = {
  title: "About me",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi magnam fuga qui reiciendis?",
  info: [
    { fieldName: "Name", fieldValue: "Manasseh Walshak" },
    { fieldName: "Phone", fieldValue: "(+234) 810 601 7834" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email", fieldValue: "walshakmanasseh@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hausa" },
  ],
};
// Experience data
export const experience = {
  icon: "",
  title: "My experience",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quod nihil!",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};
// Education data
export const education = {
  icon: "",
  title: "My Education",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quod nihil!",
  items: [
    {
      institution: "Tech Solutions Inc.",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "Tech Solutions Inc.",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "Tech Solutions Inc.",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "Tech Solutions Inc.",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "Tech Solutions Inc.",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};
// Skills data
export const skills = {
  title: "My skills",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestias.",
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
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};
