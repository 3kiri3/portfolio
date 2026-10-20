import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import projectsData from "../data/projectsData";
import { useParams, useNavigate } from "react-router-dom";
import Editorial1 from "./Templates/Editorial1";
import Editorial2 from "./Templates/Editorial2";

export default function Case() {
  const { projectIndex } = useParams();
  const navigate = useNavigate();
  const selected = parseInt(projectIndex, 10) || 0;
  const project = projectsData[selected] ?? projectsData[0];
  const [mainImage, setMainImage] = useState(project.image[0]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMainImage(project.image[0]);
  }, [project]);

  const selectedImageIndex = project.image.indexOf(mainImage);
  const template = project.editorial1Images?.includes(selectedImageIndex)
    ? "editorial1"
    : project.template ?? "editorial2";
  const thumbnailImages = project.editorial?.imageGroups
    ? project.image.filter((_, index) => {
        const imageGroup = project.editorial.imageGroups.find((group) =>
          group.includes(index)
        );
        return !imageGroup || imageGroup[0] === index;
      })
    : project.image;
  const displayNumber = String(
    thumbnailImages.indexOf(mainImage) + 1
  ).padStart(2, "0");

  return (
    <div className="fixed inset-0 flex h-full w-full overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="grid-background pointer-events-none fixed inset-0 z-0"
      />

      <div className="fixed right-0 top-0 z-30 flex h-screen w-[15%] flex-col items-end pb-0 pr-2 pt-15">
        <div className="mb-12 whitespace-nowrap text-right text-3xl font-bold overflow-visible">
          {project.title}
        </div>
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

      {/* Central content */}
      <div
        className="absolute inset-0 z-10 flex h-full w-full flex-col items-center overflow-y-auto pt-44"
        onScroll={(event) => setIsScrolled(event.currentTarget.scrollTop > 20)}
      >
        <div className="pointer-events-auto w-full">
          {template === "editorial1" ? (
            <Editorial1
              project={project}
              mainImage={mainImage}
              projectNumber={displayNumber}
            />
          ) : template === "editorial2" ? (
            <Editorial2
              project={project}
              mainImage={mainImage}
              projectNumber={displayNumber}
            />
          ) : (
            <div className="ml-[-10%] flex w-[60%] flex-col">
          <div className="flex flex-row items-start justify-between gap-8 mb-8">
            <div className="flex flex-row flex-wrap gap-4">
              <p className="bg-black text-white p-2 text-sm">{project.title}</p>
              <p className="bg-black text-white p-2 text-sm">{project.year}</p>
              <p className="bg-black text-white p-2 text-sm">{project.technologies.join(", ")}</p>
            </div>
            <div className="group fixed right-[25%] top-44 z-50 shrink-0 max-md:right-6">
              <button
                type="button"
                className="border border-black bg-white px-4 py-2 text-sm text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Thought process
              </button>
              <div className="pointer-events-none invisible absolute right-0 top-full z-50 mt-4 flex aspect-square w-80 items-center border border-white/60 bg-white/35 p-6 opacity-0 shadow-xl backdrop-blur-xl transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="max-h-full space-y-4 overflow-y-auto text-left text-sm leading-relaxed text-black">
                  {project.description.map((description) => (
                    <p key={description}>{description}</p>
                  ))}
                </div>
              </div>
            </div>
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
          )}
        </div>
      </div>

      {/* Bottom image previews */}
      <div
        className="fixed left-0 bottom-0 w-full flex items-center justify-center z-40"
        style={{ height: "15vh" }}
      >
        <div
          className={`w-full h-full flex flex-row items-center justify-center gap-4 px-8 overflow-x-auto transition-opacity duration-300 ${
            isScrolled ? "opacity-20 hover:opacity-100" : "opacity-100"
          }`}
        >
          {thumbnailImages.map((img, idx) => (
            <button
              key={img}
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