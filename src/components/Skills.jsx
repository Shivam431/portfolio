import React from "react";
import { FaJava, FaJenkins, FaNodeJs, FaReact } from "react-icons/fa6";
import {animate, motion} from "framer-motion";
import { SiMongodb } from "react-icons/si";

const iconLoop = (index) => ({
  animate: {
    y: ['0px', '-20px', '0px'], 
    transition: {
      duration: 1 + index * 0.5, 
      repeat: Infinity, //
      repeatType: 'loop', 
      ease: 'easeInOut', 
    }
  }
});

 const SKILLS = [
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl"/>,
      duration:2.5,
    },
    {
      icon:<FaReact className="text-4xl text-blue-600 lg:text-5xl"/>,
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl"/>,
    },
    {
        icon: <FaJenkins className="text-4xl text-white lg:text-5xl"/>,
      },
      {
        icon: <FaJava className="text-4xl text-red-600 lg:text-5xl"/>,
      },
  ]

const Skills = ()=>{
    return (
       <div className="border-b border-neutral-800 pb-24 ">
        <motion.h1 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        className="my-20 text-center text-4xl"> Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        {SKILLS.map((skill, index) => (
          <motion.div
          key={index}
          variants={iconLoop(index)} // Pass index to get unique animation
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {skill.icon}
        </motion.div>
        ))}
          
        </motion.div>
        </div>
    )
}

export default Skills;