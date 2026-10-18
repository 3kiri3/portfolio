import React, { useState, useEffect, useRef } from "react";
import projectsData from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import Presentation from "./Presentation";
import About from "./About";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [scaleDown, setScaleDown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const slides = [
    { type: "presentation" },
    ...projectsData.map((project) => ({ type: "project", project })),
    { type: "about" },
  ];

  const handleWheel = (event) => {
    const container = scrollContainerRef.current;
    if (!container || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    container.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const ref = scrollContainerRef.current;
    if (!ref) return undefined;

    const handleScroll = () => {
      const scrollWidth = ref.scrollWidth || 1;
      const clientWidth = ref.clientWidth || 1;
      const progress = ref.scrollLeft / Math.max(scrollWidth - clientWidth, 1);
      setShowText(progress > 0.1);

      const containerCenter = ref.getBoundingClientRect().left + clientWidth / 2;
      const slideElements = ref.querySelectorAll("[data-slide-index]");
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slideElements.forEach((slide) => {
        const { left, width } = slide.getBoundingClientRect();
        const distance = Math.abs(left + width / 2 - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = Number(slide.dataset.slideIndex);
        }
      });

      setActiveIndex(closestIndex);
      setScaleDown(progress > 0.1);
    };

    const saved = localStorage.getItem("scrollPosition");
    if (saved) {
      ref.scrollLeft = parseInt(saved, 10);
      localStorage.removeItem("scrollPosition");
    }

    ref.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      ref.removeEventListener("scroll", handleScroll);
    };
  }, [slides.length]);

  return (
    <div className="fixed w-screen h-screen bg-gray-100 flex items-center flex-col justify-center p-0">
      <div className="fixed bottom-0 left-0 px-4 py-8 z-1">
        <p className="text-[1rem]">(Scroll Right)</p>
      </div>

      <div className="fixed top-0 right-0 -translate-x-1/2 flex flex-row gap-2 z-3 mt-32 -px-4">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`bg-black rounded transition-all duration-300 ${activeIndex === idx ? "w-8 h-2" : "w-1 h-2 opacity-60"}`}
          />
        ))}
      </div>

        <div ref={scrollContainerRef} 
              data-scroll-container
            onWheel={handleWheel}
            className="w-full h-full overflow-x-auto overscroll-x-contain no-scrollbar flex items-center z-2">
          
          <motion.div
            className={`flex flex-row items-center pl-[15vw] ${scaleDown ? "pl-[15vw]" : "-pl-[10vw]"} gap-16`}
            animate={{ scale: scaleDown ? 0.8 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <div data-slide-index="0" className="w-[70vw] h-[70vh] flex-shrink-0 flex items-center justify-center">
              <div className="w-[100vw] h-[100vh] scale-70 flex-shrink-0">
                <Presentation />
              </div>
            </div>
            {projectsData.map((project, index) => (
              <div data-slide-index={index + 1} key={project.id} className="w-[70vw] h-[70vh] flex-shrink-0 flex items-center justify-center">
                <div className="w-[100vw] h-[100vh] scale-70 flex-shrink-0">
                  <Projects project={project} index={index} />
                </div>
              </div>
            ))}
            <div data-slide-index={slides.length - 1} className="w-[70vw] h-[70vh] flex-shrink-0 flex items-center justify-center">
              <div className="w-[100vw] h-[100vh] scale-70 flex-shrink-0">
                <About />
              </div>
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
          {showText && (
            <motion.div
              className="fixed bottom-0 right-0 px-4 -my-16 text-lg z-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[25rem] -my-20">{String(activeIndex - 1).padStart(2, "0")}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showText && (
            <motion.div
              className="fixed top-0 left-0 px-4 py-20 text-lg z-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[12rem] -my-20">Browse</p>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
    