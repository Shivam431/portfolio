import React from "react";
import {PROJECTS} from "../constants"
import { MdArrowOutward } from "react-icons/md";
import {motion} from "framer-motion";

const Projects = ()=>{
    return (
        <>
        <section className="pt-20" id="projects">
            <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    PROJECTS.map((project,index) => (
                        <motion.div 
                        initial={{ opacity: 0, x: '-100%' }}  // Start off-screen to the left
        whileInView={{
          opacity: 1,       
          x: 0,            
          transition: {
            duration: 1,    
            ease: 'easeOut', 
          },
        }}
        viewport={{ once: false }} 

                        whileHover={{
                          y: -10, 
                          scale: 1.05,
                          transition: { duration: 0.3, ease: 'easeInOut' },
                        }}
                        key={index} className="group relative overflow-hidden rounded-3xl">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                            <h3 className="mb-2 text-xl">{project.title}</h3>
                            <p className="mb-12 p-4">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-2 py-2 text-black hover:bg-gray-300">
                                <div className="flex items-center">
                                    <p>View on Github</p>
                                    <MdArrowOutward />
                                </div>
                            </a>
                          </div>
                        </motion.div>
                      ))
                      
                }
            </div>
        </section>
        </>
    )
}

export default Projects;