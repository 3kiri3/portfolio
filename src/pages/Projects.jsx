import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Projects({ project, index }) {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-start items-center px-6 overflow-hidden relative gap-16">
      
      <div 
        className="w-auto absolute bottom-0 right-3 z-0 mx-0 my-0 leading-none translate-x-8" 
        style={{ fontSize: "30rem", pointerEvents: "none", color: "#f3f4f6" }} 
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      
      <div className="w-full flex flex-row justify-between items-end mt-20 z-10">
        <p className="text-9xl my-0 mx-0 translate-x-[-0.5rem]">.</p>
        <div className="w-32 h-16 rounded-lg flex items-end justify-end">
            <span className="block w-px h-16 bg-black" />
        </div>
      </div>

      <div className="w-full h-[70%] flex flex-row gap-44 min-h-0 z-10">
        
        <motion.div
          className="h-[95%] w-[20%] flex flex-col justify-between items-start min-w-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full text-left space-y-2">
            <p className="text-2xl font-light">Project : {project.title}</p>
            <p className="text-2xl font-light">Year : {project.year}</p>
            <p className="text-2xl font-light">Technologies : {project.technologies?.join(", ")}</p>
            <div className="w-2/3 h-full  rounded-lg"></div>
          </div>
          <button 
            className="text-base font-light underline mt-4 hover:opacity-50 transition" 
            onClick={() => {
              const scrollContainer = document.querySelector('[data-scroll-container]');
              if (scrollContainer) {
                localStorage.setItem("scrollPosition", scrollContainer.scrollLeft);
              }
              navigate(`/case/${index}`);
            }}
          >
            Discover project
          </button>
        </motion.div>

        <motion.div
          className="w-[50%] h-[95%] flex flex-col justify-start items-start min-w-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-1xl font-light mb-2">Load project {String(index + 1).padStart(2, "0")}</p>
          <div className="relative w-full flex-1 min-h-0">
            <div className="absolute bottom-0 w-full h-[95%] bg-blue-400 rounded-xl" style={{ zIndex: 1 }} />
            <div className="absolute bottom-0 w-full h-[90%] bg-blue-500 rounded-xl" style={{ zIndex: 2 }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}