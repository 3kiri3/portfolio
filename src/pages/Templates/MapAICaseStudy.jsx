import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionLabel({ number, children }) {
  return (
    <div className="mb-8 flex items-center gap-4 border-b border-black pb-3">
      <span className="text-xs">{number}</span>
      <p className="text-xs uppercase tracking-[0.2em]">{children}</p>
    </div>
  );
}

function ScreenFigure({ src, alt, caption, className = "" }) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-auto w-full object-contain"
      />
      {caption && (
        <figcaption className="mt-3 border-t border-black pt-2 text-xs leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function MapAICaseStudy({ project }) {
  const [coverImage, onboarding, map, discovery, itinerary] = project.image;

  return (
    <article className="relative w-full pb-40 text-black">
      <div className="ml-[16.6667%] w-[66.6667%] max-md:ml-[5%] max-md:w-[90%]">
        <header className="border-b border-black pb-20">
          <div className="mb-8 flex justify-between text-xs uppercase tracking-widest">
            <span>Selected project / {project.year}</span>
            <span>Case study — 02</span>
          </div>
          <p className="mb-6 text-sm uppercase tracking-[0.2em]">MapAI</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-inria text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] tracking-tight"
          >
            MapAI
          </motion.h1>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xl leading-relaxed md:text-2xl">
            A more personal way to explore a city.
          </p>
          <div className="mt-16">
            <ScreenFigure
              src={coverImage}
              alt="MapAI main interface showing the travel discovery concept"
              caption="MapAI — an AI-assisted travel discovery concept."
            />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-black pt-6 max-md:grid-cols-2">
            {[
              ["Project", "AI-assisted travel discovery concept"],
              ["Tools", project.technologies?.join(", ")],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="mb-3 text-xs uppercase tracking-widest">{label}</p>
                <p className="text-sm leading-relaxed">{value || "—"}</p>
              </div>
            ))}
          </div>
        </header>

        <motion.section
          className="relative border-b border-black py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel number="01">The idea</SectionLabel>
          <div className="grid grid-cols-12 gap-12 max-md:grid-cols-1">
            <div className="col-span-5">
              <h2 className="font-inria text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl">
                Travel, tailored to you.
              </h2>
            </div>
            <div className="col-span-6 col-start-7 max-md:col-start-1">
              <p className="text-base leading-8">
                Planning a day in a city often means jumping between maps,
                reviews, saved places, and personal preferences. MapAI explores
                how an AI assistant could bring these decisions into one
                coherent experience, helping users discover relevant places and
                turn them into a practical itinerary.
              </p>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {[
              ["Discover", "Find restaurants, museums, and parks based on a destination and personal preferences.", onboarding],
              ["Personalize", "Set meal, atmosphere, dietary, distance, and budget preferences.", map],
              ["Plan", "Save favorite places, compare options, and organize stops into an itinerary.", itinerary],
            ].map(([title, description, image], index) => (
              <article key={title} className="border-t-2 border-[#5b21e6] pt-5">
                <p className="text-xs text-[#5b21e6]">0{index + 1}</p>
                <h3 className="mt-5 font-inria text-3xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7">{description}</p>
                <ScreenFigure src={image} alt={`MapAI ${title.toLowerCase()} interface`} className="mt-8" />
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="relative py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel number="02">The experience</SectionLabel>
          <div className="grid grid-cols-12 items-end gap-12 max-md:grid-cols-1">
            <h2 className="col-span-7 font-inria text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl">
              From discovery to itinerary.
            </h2>
            <p className="col-span-4 col-start-9 text-sm leading-7 max-md:col-start-1">
              A prototype flow that moves from preference setting to map
              exploration, evaluation, and planning.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-16 max-md:grid-cols-1">
            {[
              ["01", "Set preferences", "Choose interests, travel mode, budget, and travel time.", onboarding],
              ["02", "Explore the map", "Discover suitable places and ask the AI assistant for help.", map],
              ["03", "Evaluate and save", "Inspect a place, compare favorites, and save relevant options.", discovery],
              ["04", "Build an itinerary", "Organize stops and revisit or edit saved plans.", itinerary],
            ].map(([number, title, caption, image], index) => (
              <article key={title} className={`col-span-6 ${index % 2 ? "col-start-7 max-md:col-start-1" : ""}`}>
                <div className="mb-5 flex items-center gap-4 border-t border-black pt-4">
                  <span className="font-inria text-3xl text-[#5b21e6]">{number}</span>
                  <h3 className="font-inria text-3xl font-bold">{title}</h3>
                </div>
                <ScreenFigure src={image} alt={`MapAI flow step: ${title}`} caption={caption} />
              </article>
            ))}
          </div>
        </motion.section>

        <motion.footer
          className="border-t border-black py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel number="03">Reflection</SectionLabel>
          <div className="grid grid-cols-12 gap-12 max-md:grid-cols-1">
            <h2 className="col-span-6 font-inria text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl">
              Designing an AI travel companion.
            </h2>
            <div className="col-span-5 col-start-8 max-md:col-start-1">
              <p className="text-base leading-8">
                The design challenge was to make AI-assisted discovery feel
                useful without taking control away from the user. MapAI balances
                personalization with transparency and choice: users can review
                and adjust their preferences, compare recommendations, and
                understand why a place is being suggested.
              </p>
              <p className="mt-8 border-t border-black pt-5 text-xs uppercase tracking-widest">
                Prototype exploration · Figma
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </article>
  );
}
