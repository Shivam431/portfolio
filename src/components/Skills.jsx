import React from "react";
import { FaJava, FaJenkins, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

 const SKILLS = [
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl"/>,
      name:"MongoDB",
      experience: "1+ year",
    },
    {
      icon:<FaReact className="text-4xl text-blue-600 lg:text-5xl"/>,
      name: "React.js",
      experience: "3+ years",
      category: "Web Development"
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl"/>,
      name: "Node.js",
      experience: "1+ years",
      category: "Web Development",
    },
    {
        icon: <FaJenkins className="text-4xl text-white lg:text-5xl"/>,
        name: "Jenkins",
        experience: "3+ years",
        category: "Web Development",
      },
      {
        icon: <FaJava className="text-4xl text-red-600 lg:text-5xl"/>,
        name: "Java",
        experience: "1+ years",
        category: "Web Development",
      },
  ]

const Skills = ()=>{
    return (
        <div className="container mx-auto" id="skills">
            <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
            <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
            {
                SKILLS.map((skill,index)=>(
                    <div key={index} className={`py-6 flex items-center justify-between ${index !==SKILLS.length-1 ? "border-b border-stone-50/30" : ""}`}>
                        <div className="flex items-center">{skill.icon}
                            <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
                        </div>

                        <div className="text-md font-semibold lg:text-xl">
                            <span>{skill.experience}</span>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Skills;