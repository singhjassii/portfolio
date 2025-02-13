import { BsFiletypeScss } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { BiLogoNetlify, BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNpm,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiAxios,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiPostman,
  SiReacthookform,
  SiSequelize,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const data = [
  {
    name: "Front-End",
    content: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "SASS/SCSS", icon: <BsFiletypeScss /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Redux.js", icon: <SiRedux /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "GSAP", icon: <MdAnimation /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    name: "Back-End",
    content: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "Sequelize", icon: <SiSequelize /> },
    ],
  },
  {
    name: "Tools",
    content: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Npm", icon: <FaNpm /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "pgAdmin", icon: <SiPostgresql /> },
      { name: "Chrome dev tools", icon: <FaChrome /> },
    ],
  },
];
