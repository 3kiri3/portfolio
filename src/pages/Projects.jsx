import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Projects({ project, index }) {
  const navigate = useNavigate();

  const openProject = () => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (scrollContainer) {
      localStorage.setItem("scrollPosition", scrollContainer.scrollLeft);
    }
    navigate(`/case/${index}`);
  };

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
            onClick={openProject}
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
          <div className="relative w-full flex-1 min-h-0 [perspective:900px]">
            <div className="absolute inset-x-0 bottom-0 h-[95%] overflow-hidden rounded-xl bg-blue-400" style={{ zIndex: 1 }}>
              <div className="absolute inset-0 opacity-80">
                {project.image.slice(0, 3).map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.title} preview ${imageIndex + 1}`}
                    className="absolute rounded-lg object-cover shadow-lg"
                    style={[
                      { left: "7%", top: "12%", width: "54%", height: "72%", transform: "rotate(-7deg)" },
                      { right: "7%", top: "7%", width: "52%", height: "76%", transform: "rotate(6deg)" },
                      { left: "23%", bottom: "4%", width: "54%", height: "58%", transform: "rotate(-2deg)" },
                    ][imageIndex]}
                  />
                ))}
              </div>
            </div>
            <motion.button
              type="button"
              aria-label={`Open ${project.title}`}
              onClick={openProject}
              whileHover={{ opacity: 0.62, rotateX: -6, skewX: -2, y: 4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-x-0 bottom-0 h-[90%] w-full cursor-pointer appearance-none rounded-xl border-0 bg-blue-500 p-0 shadow-sm outline-none"
              style={{ zIndex: 2, transformOrigin: "bottom left" }}
            >

            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}