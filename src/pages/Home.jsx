import React, { useState, useEffect, useRef } from "react";
import projectsData from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import Presentation from "./Presentation";
import About from "./About";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [showReturnPrompt, setShowReturnPrompt] = useState(false);
  const [scaleDown, setScaleDown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const slides = [
    { type: "presentation" },
    ...projectsData.slice(0, 4).map((project) => ({ type: "project", project })),
    { type: "about" },
    ...projectsData.slice(4).map((project) => ({ type: "project", project })),
  ];
  const aboutIndex = 5;
  const displayIndex = activeIndex >= aboutIndex ? activeIndex - 1 : activeIndex;

  const handleWheel = (event) => {
    const container = scrollContainerRef.current;
    if (!container || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    container.scrollLeft += event.deltaY;
  };

  const goToProjectsStart = () => {
    const container = scrollContainerRef.current;
    const firstProject = container?.querySelector('[data-slide-index="1"]');

    if (!container || !firstProject) return;

    container.scrollTo({
      left: Math.max(firstProject.offsetLeft - (container.clientWidth - firstProject.offsetWidth) / 2, 0),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ref = scrollContainerRef.current;
    if (!ref) return undefined;

    const handleScroll = () => {
      const scrollWidth = ref.scrollWidth || 1;
      const clientWidth = ref.clientWidth || 1;
      const maxScrollLeft = Math.max(scrollWidth - clientWidth, 1);
      const progress = ref.scrollLeft / maxScrollLeft;
      setShowText(progress > 0.1);
      setShowReturnPrompt(ref.scrollLeft >= maxScrollLeft - 8);

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
        {slides.filter((slide) => slide.type !== "about").map((slide, idx) => (
          <div
            key={slide.type === "project" ? slide.project.id : slide.type}
            className={`bg-black rounded transition-all duration-300 ${displayIndex === idx ? "w-8 h-2" : "w-1 h-2 opacity-60"}`}
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
            {slides.map((slide, index) => (
              <div data-slide-index={index} key={slide.type === "project" ? slide.project.id : slide.type} className="w-[70vw] h-[70vh] flex-shrink-0 flex items-center justify-center">
                <div className="w-[100vw] h-[100vh] scale-70 flex-shrink-0">
                  {slide.type === "presentation" && <Presentation />}
                  {slide.type === "project" && (
                    <Projects project={slide.project} index={projectsData.indexOf(slide.project)} />
                  )}
                  {slide.type === "about" && <About />}
                  </div>
                </div>
              ))}
          </motion.div>
          </div>
          <AnimatePresence>
            {showReturnPrompt && (
              <motion.div
                className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <button
                  type="button"
                  onClick={goToProjectsStart}
                  className="pointer-events-auto text-center text-lg font-light underline underline-offset-4 transition hover:opacity-50"
                >
                  Back to Project 1
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
          {showText && (
            <motion.div
              className="fixed bottom-0 right-0 px-4 -my-16 text-lg z-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[25rem] -my-20">{String(displayIndex).padStart(2, "0")}</p>
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
    