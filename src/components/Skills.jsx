import React from "react";
import { FaJava, FaJenkins, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

 const SKILLS = [
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl"/>,
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
        <h1 className="my-20 text-center text-4xl"> Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {
            SKILLS.map((skill,index)=>(
<div className="rounded-2xl border-4 border-neutral-800 p-4">
           {skill.icon}
          </div>
            ))
          }
          
        </div>
        </div>
    )
}

export default Skills;