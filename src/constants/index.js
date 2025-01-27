import { SiMongodb } from "react-icons/si";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I am a passionate web developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have worked with a frontend technologies, including React,JavaScript,HTML,CSS and Tailwind CSS. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. With 4 years of professional experience, I have worked with a frontend technologies, including React,JavaScript,HTML,CSS and Tailwind CSS. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Software Engineer",
    company: "Quest Global",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Tailwind CSS. Integrate RESTful APIs. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "HTML", "Tailwind CSS"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React"],
    link:"https://github.com/Shivam431/JSEcom",
  },
 
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    link:"https://github.com/Shivam431/portfolio",
  },
  {
    title: "Quiz",
    image: project1,
    description:
      "A Quiz Management provides features like question creation, real-time scoring, time tracking, and user performance analysis",
    technologies: ["HTML", "CSS", "React"],
    link:"https://github.com/Shivam431/Quizy-Time",
  },
];

export const CONTACT = {
  address: "Gurgaon,Haryana ",
  phoneNo: "+91-8273822098 ",
  email: "shivamsaxena251@gmail.com",
};
 
export const HERO={
  name:"Shivam Saxena",
  greet:"Hello There"
};

export const NAVIGATION_LINKS =[
  {label:"Projects",href:"#projects"},
  {label:"Bio",href:"#bio"},
  {label:"Skills",href:"#skills"},
  {label:"Experience",href:"#experience"},
  {label:"Education",href:"#education"},
  {label:"Contact",href:"#contact"},
];