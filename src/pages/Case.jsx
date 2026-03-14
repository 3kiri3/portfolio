import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projectsData";
import { useParams, useNavigate } from "react-router-dom";

const RECT_WIDTH = 280;
const RECT_HEIGHT = 100;
const PADDING = 32;

const getRandomPosition = (container) => {
  const width = container?.offsetWidth || window.innerWidth;
  const height = container?.offsetHeight || window.innerHeight;
  return {
    x: Math.random() * (width - RECT_WIDTH - PADDING * 2) + PADDING,
    y: Math.random() * (height - RECT_HEIGHT - PADDING * 2) + PADDING,
  };
};

export default function Case() {
  const { projectIndex } = useParams();
  const navigate = useNavigate();
  const selected = parseInt(projectIndex, 10) || 0;
  const [descPositions, setDescPositions] = useState([]);
  const [mainImage, setMainImage] = useState(projectsData[selected].image[0]);
  const containerRef = useRef(null);

  useEffect(() => {
    setMainImage(projectsData[selected].image[0]);
    setTimeout(() => {
      setDescPositions(
        projectsData[selected].description.map(() =>
          getRandomPosition(containerRef.current)
        )
      );
    }, 0);
  }, [selected]);

  const project = projectsData[selected];

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full bg-white overflow-hidden flex">
      <div className="fixed right-0 top-0 h-screen w-[20%] flex flex-col items-end pt-15 pr-2 z-30 bg-white/80 backdrop-blur">
        <div className="text-5xl font-bold mb-12 text-right">{project.title}</div>
        <div className="w-full h-px bg-black mb-8" />
        <div className="flex flex-col gap-8">
          {projectsData.map((proj, i) =>
            i !== selected ? (
              <button
                key={proj.id}
                onClick={() => navigate(`/case/${i}`)}
                className="text-base text-right text-black hover:underline transition"
              >
                {proj.title}
              </button>
            ) : null
          )}
        </div>
      </div>

      {/* Back button */}
      <div className="fixed left-0 top-0 w-[10%] h-24 flex items-start justify-start z-30 bg-white/80 backdrop-blur">
        <button
          className="m-8 p-2 rounded transition flex items-center hover:scale-110"
          onClick={() => navigate("/")}
          aria-label="Retour"
        >
          <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
            <polyline
              points="20,8 8,16 20,24"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

    
      <AnimatePresence>
        {project.description.map((desc, idx) => (
          <motion.div
            key={desc}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={containerRef}
            style={{
              left: descPositions[idx]?.x || 100,
              top: descPositions[idx]?.y || 100,
              position: "absolute",
              borderRadius: "0.2rem",
              boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
              width: RECT_WIDTH,
              minHeight: RECT_HEIGHT,
              pointerEvents: "auto",
            }}
            className="z-40 px-6 py-4 border border-white/40 bg-white/30 backdrop-blur-md shadow-lg cursor-grab active:cursor-grabbing select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              left: descPositions[idx]?.x || 100,
              top: descPositions[idx]?.y || 100,
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
              mass: 1.2,
            }}
            onDragEnd={(_, info) => {
              const container = containerRef.current;
              if (!container) return;
              const width = container.offsetWidth;
              const height = container.offsetHeight;
              let x = info.point.x - container.getBoundingClientRect().left;
              let y = info.point.y - container.getBoundingClientRect().top;
              x = Math.max(PADDING, Math.min(x, width - RECT_WIDTH - PADDING));
              y = Math.max(PADDING, Math.min(y, height - RECT_HEIGHT - PADDING));
              setDescPositions((positions) =>
                positions.map((pos, i) =>
                  i === idx ? { x, y } : pos
                )
              );
            }}
          >
            <span className="text-sm text-black">{desc}</span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Central content */}
      <div className="absolute inset-0 w-full h-full overflow-y-auto flex flex-col items-center pt-44 pb-48 z-10 pointer-events-none">
        <div className="w-[60%] flex flex-col ml-[-10%] pointer-events-auto">
          <div className="flex flex-row flex-wrap gap-4 mb-8">
            <p className="bg-black text-white p-2 text-sm">{project.title}</p>
            <p className="bg-black text-white p-2 text-sm">{project.year}</p>
            <p className="bg-black text-white p-2 text-sm">{project.technologies.join(", ")}</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={mainImage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                src={mainImage}
                alt={project.title}
                className="w-full h-auto object-contain shadow-lg"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom image previews */}
      <div
        className="fixed left-0 bottom-0 w-full flex items-center justify-center z-40"
        style={{ height: "15vh" }}
      >
        <div className="w-full h-full flex flex-row items-center justify-center gap-4 px-8 overflow-x-auto">
          {project.image.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(img)}
              className={`h-[70%] aspect-video overflow-hidden border-2 transition-all
                ${mainImage === img ? "border-black scale-105" : "border-transparent opacity-50 hover:opacity-100"} 
                hover:border-black`}
            >
              <img
                src={img}
                alt={`Preview ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}