import React from "react";
import { motion } from "framer-motion";

const projectSections = [
  {
    id: "vision",
    number: "01",
    title: "The vision",
    subtitle: "Where fashion meets digital expression.",
    description:
      "An exploration of contemporary fashion, editorial storytelling and the visual codes of luxury e-commerce.",
    imageIndex: 1,
    imageRight: true,
  },
  {
    id: "research",
    number: "02",
    title: "Visual research",
    subtitle: "Building a distinctive visual language.",
    description:
      "Inspired by fashion editorials, tactile materials, expressive typography and contemporary luxury brands.",
    imageIndex: 2,
    imageRight: false,
  },
  {
    id: "wireframes",
    number: "03",
    title: "From concept to structure",
    subtitle: "Designing the shopping journey.",
    description:
      "Initial wireframes exploring page hierarchy, navigation, product discovery and the relationship between imagery and content.",
    imageIndex: 3,
    imageRight: true,
  },
];

const screens = [
  ["Homepage", "An editorial entrance into the brand universe.", 4],
  ["Product page", "A clear product presentation with visual emphasis.", 5],
  ["Shopping cart", "A simple and coherent shopping experience.", 6],
  ["Get the look", "Encouraging discovery through curated outfits.", 7],
];

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectSection({ section, image }) {
  return (
    <Reveal
      id={section.id}
      className={`grid items-center gap-12 border-b border-black/50 py-24 md:gap-20 ${
        section.imageRight
          ? "md:grid-cols-[1.2fr_0.8fr]"
          : "md:grid-cols-[0.8fr_1.2fr]"
      }`}
    >
      <div
        className={`bg-[#a9b7a4] p-4 ${
          section.imageRight ? "md:order-1" : "md:order-2"
        }`}
      >
        <img
          src={image}
          alt={section.title}
          loading="lazy"
          className="block max-h-[42rem] w-full object-contain"
        />
      </div>
      <div className={section.imageRight ? "md:order-2" : "md:order-1"}>
        <span className="text-xl tracking-[0.1em] text-[#c95135]">
          {section.number}
        </span>
        <h2 className="mt-6 font-inria text-5xl leading-[0.88] md:text-7xl">
          {section.title}
        </h2>
        <h3 className="mt-6 font-inria text-xl text-[#e8cfd0]">
          {section.subtitle}
        </h3>
        <p className="mt-6 max-w-md text-sm leading-8">{section.description}</p>
      </div>
    </Reveal>
  );
}

function ScreenCard({ title, description, image }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <article>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full cursor-zoom-in bg-[#f2ede4] p-3 text-left"
        aria-label={`Enlarge ${title} screen`}
      >
        <img
          src={image}
          alt={`${title} screen`}
          loading="lazy"
          className="h-72 w-full object-contain"
        />
      </button>
      <h3 className="mt-6 font-inria text-2xl text-[#e8cfd0]">{title}</h3>
      <p className="mt-2 text-sm leading-7">{description}</p>
      {isOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/75 p-6"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={image}
            alt={`${title} screen enlarged`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </article>
  );
}

export default function FashionCaseStudy({ project }) {
  const images = project.image;

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-black">
      <div className="ml-[16.6667%] w-[66.6667%] max-md:ml-[5%] max-md:w-[90%]">
        <header className="border-b border-black py-12 md:py-16">
          <div className="mb-8 flex justify-between gap-6 text-xs uppercase tracking-widest max-md:flex-col">
            <span>Selected project / {project.year}</span>
            <span>Case study — 01</span>
          </div>

          <div className="grid items-end gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#c95135]">
                Art direction · UX/UI design
              </p>
              <h1 className="font-inria text-[clamp(4rem,10vw,9rem)] leading-[0.84] tracking-tight">
                Angel’s Treasures
              </h1>
            </Reveal>
            <Reveal className="md:col-span-5 md:col-start-8">
              <p className="text-base leading-8">
                A high-fashion e-commerce experience shaped by editorial
                imagery and contemporary visual culture.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <img
              src={images[0]}
              alt="Angel’s Treasures fashion e-commerce experience"
              className="block w-full object-contain shadow-lg"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-black pt-6 max-md:grid-cols-2">
            {[
              ["Project", "High-fashion e-commerce experience"],
              ["Role", "Art direction, UX/UI design"],
              ["Tools", project.technologies.join(", ")],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="mb-3 text-xs uppercase tracking-widest">{label}</p>
                <p className="text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </header>

        <Reveal className="grid gap-12 bg-white px-8 py-24 text-black md:grid-cols-[1fr_0.8fr] md:gap-20 md:px-16">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-[#c95135]">
              The project
            </span>
            <h2 className="mt-6 font-inria text-5xl leading-[0.9] md:text-7xl">
              Fashion, translated into a digital experience.
            </h2>
          </div>
          <div>
            <p className="leading-8">
              Designing an online store that balances a strong fashion identity
              with a clear, intuitive shopping journey.
            </p>
            <dl className="mt-12 border-t border-black">
              <div className="flex justify-between gap-6 border-b border-black py-4 text-sm">
                <dt className="uppercase tracking-[0.12em]">Role</dt>
                <dd>Art direction, UX/UI design</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-black py-4 text-sm">
                <dt className="uppercase tracking-[0.12em]">Tools</dt>
                <dd>{project.technologies.join(", ")}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-black py-4 text-sm">
                <dt className="uppercase tracking-[0.12em]">Status</dt>
                <dd>Work in progress</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <div>
          {projectSections.map((section) => (
            <ProjectSection
              key={section.id}
              section={section}
              image={images[section.imageIndex]}
            />
          ))}
        </div>

        <Reveal className="border-t border-black py-24" id="experience">
          <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:gap-20">
            <div>
              <span className="              text-xs uppercase tracking-[0.18em] text-[#c95135]">
                The digital experience
              </span>
              <h2 className="mt-6 font-inria text-5xl leading-[0.9] md:text-7xl">
                Designed for discovery.
              </h2>
            </div>
            <p className="self-end leading-8">
              From the first impression to the product page, each screen
              contributes to a consistent shopping experience.
            </p>
          </div>
          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {screens.map(([title, description, imageIndex]) => (
              <ScreenCard
                key={title}
                title={title}
                description={description}
                image={images[imageIndex]}
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="border-t border-black py-24 pb-48">
          <span className="text-xs uppercase tracking-[0.16em]">
            Angel’s Treasures / {project.year}
          </span>
          <h2 className="mt-6 max-w-2xl font-inria text-5xl leading-[0.9] md:text-7xl">
            An evolving vision of digital fashion.
          </h2>
          <p className="mt-8 ml-auto max-w-md leading-8">
            The next step is to refine the visual identity and bring the
            complete e-commerce experience to life.
          </p>
        </Reveal>
      </div>
    </main>
  );
}
