import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
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

function OversizedNumber({ number }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-[-0.15em] z-0 font-inria text-[clamp(7rem,18vw,15rem)] font-bold leading-none tracking-[-0.08em] text-[#eef0ff]"
    >
      {number}
    </span>
  );
}

function ImageFigure({ src, caption, alt, className = "" }) {
  if (!src) return null;
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt || caption || "Food Charm project documentation"}
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

function ScenarioSection({ number, label, scenario }) {
  if (!scenario) return null;

  return (
    <motion.section
      className="border-t border-black py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionLabel number={number}>{label}</SectionLabel>
      <div className="grid grid-cols-12 gap-12 max-md:grid-cols-1">
        <div className="col-span-4">
          <h2 className="font-inria text-4xl leading-tight md:text-6xl">
            {scenario.title}
          </h2>
          <p className="mt-6 text-sm leading-7">{scenario.introduction}</p>
        </div>
        <div className="col-span-8 col-start-5 max-md:col-start-1">
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {scenario.steps.map((step, index) => (
            <div key={step.title} className="border-t border-black pt-5">
              <span className="text-sm">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <ImageFigure src={step.image} alt={`${label}, step ${index + 1}: ${step.title}`} />
                <h3 className="mt-5 font-inria text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7">{step.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function EditorialSection({ number, title, description, children, oversized = false }) {
  return (
    <motion.section
      className="relative overflow-hidden border-t border-black py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {oversized && <OversizedNumber number={number} />}
      <SectionLabel number={number}>{title}</SectionLabel>
      <div className="relative z-10">
        {oversized ? (
          <div className="grid grid-cols-12 gap-12 max-md:grid-cols-1">
            <h2 className="col-span-8 max-w-5xl font-inria text-6xl font-bold leading-[0.92] tracking-tight md:text-8xl">
              {title}
            </h2>
            {description && (
              <p className="col-span-6 col-start-7 row-start-2 pt-8 text-base leading-8 max-md:col-start-1 max-md:row-start-auto">
                {description}
              </p>
            )}
          </div>
        ) : (
          description && <p className="max-w-3xl text-base leading-8">{description}</p>
        )}
        {children}
      </div>
    </motion.section>
  );
}

export default function EditorialCaseStudy({ project }) {
  const study = project.caseStudy ?? {};
  return (
    <article className="relative w-full pb-40 text-black">
      <div className="ml-[16.6667%] w-[66.6667%] max-md:ml-[5%] max-md:w-[90%]">
        <header className="border-b border-black pb-16">
          <div className="mb-8 flex justify-between text-xs uppercase tracking-widest">
            <span>Selected project / {project.year}</span>
            <span>Case study — 01</span>
          </div>
          <p className="mb-6 text-sm uppercase tracking-[0.2em]">{study.category}</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-inria text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] tracking-tight"
          >
            {project.title}
          </motion.h1>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xl leading-relaxed md:text-2xl">{study.subtitle}</p>
          <div className="mt-16">
            <ImageFigure src={study.coverImage} caption={study.coverCaption} alt={`${project.title} final prototype`} />
          </div>
          <div className="mt-16 grid grid-cols-4 gap-8 border-t border-black pt-6 max-md:grid-cols-2">
            {[["Timeline", study.duration], ["My role", study.role], ["Team", study.team], ["Tools", project.technologies?.join(", ")]].map(([label, value]) => (
              <div key={label}>
                <p className="mb-3 text-xs uppercase tracking-widest">{label}</p>
                <p className="text-sm leading-relaxed">{value || "—"}</p>
              </div>
            ))}
          </div>
        </header>

        <motion.section className="relative overflow-hidden py-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <OversizedNumber number="01" />
          <SectionLabel number="01">Project overview</SectionLabel>
          <div className="relative z-10 grid grid-cols-12 items-start gap-12 max-md:grid-cols-1">
            <h2 className="col-span-5 max-w-xl font-inria text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">{study.overviewTitle}</h2>
            <div className="col-span-6 col-start-7 space-y-6 border-l border-black pl-8 max-md:col-start-1 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-8">
              <p className="text-base leading-8">{study.description}</p>
              <div className="border-t-2 border-black pt-6">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em]">Key objectives</p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {study.objectives?.map((item, index) => (
                    <li key={item} className="border border-black p-5 text-base leading-relaxed transition-colors hover:bg-black hover:text-white">
                      <span className="mb-3 block text-xs font-bold">0{index + 1}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="relative overflow-hidden border-t border-black py-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <OversizedNumber number="02" />
          <SectionLabel number="02">Listening before designing</SectionLabel>
          <div className="relative z-10 grid grid-cols-12 items-end gap-12 max-md:grid-cols-1">
            <div className="col-span-7">
              <p className="mb-6 text-xs uppercase tracking-widest">The problem</p>
              <h2 className="max-w-3xl font-inria text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">{study.problem}</h2>
              <p className="mt-8 text-base leading-8">{study.problemContext}</p>
            </div>
            <div className="col-span-4 col-start-9 pt-12 max-md:col-start-1">
              <p className="mb-4 text-xs uppercase tracking-widest">Research frame</p>
              <p className="text-sm leading-7">{study.research?.introduction}</p>
              <p className="mt-5 text-xs uppercase tracking-widest">{study.research?.method}</p>
            </div>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-5 border-t border-black pt-6 md:grid-cols-2">
            {study.problemPoints?.map((point, index) => (
              <div key={point} className="flex gap-5 border-b border-black/30 pb-5">
                <span className="text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base leading-7">{point}</p>
              </div>
            ))}
          </div>
          <div className="relative z-10 mt-20 grid gap-6 md:grid-cols-3">
            {study.interviews?.map((interview, index) => (
              <article
                key={index}
                className={`flex min-h-[20rem] flex-col border border-black p-6 transition-colors hover:bg-black hover:text-white ${
                  index === 1 ? "bg-[#eef2ff] md:p-8" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-widest">Interview {String(index + 1).padStart(2, "0")}</p>
                <p className="mt-6 text-sm font-medium">{interview.profile}</p>
                <blockquote className="mt-8 flex-1 font-inria text-3xl leading-snug md:text-4xl">{interview.quote}</blockquote>
                <div className="mt-8 border-t border-current pt-5">
                  <p className="mb-3 text-xs uppercase tracking-widest">What it revealed</p>
                  <p className="text-sm leading-7">{interview.insight}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="relative overflow-hidden border-t border-black py-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <SectionLabel number="03">User personas</SectionLabel>
          <p className="mb-12 max-w-2xl text-sm leading-7">{study.personasIntroduction}</p>
          <div className="grid grid-cols-3 items-stretch gap-6 max-md:grid-cols-1">
            {study.personas?.map((persona, index) => (
              <motion.article key={persona.name} whileHover={{ y: -8 }} className="flex h-full flex-col border border-black p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest">Persona 0{index + 1}</p>
                <h3 className="mt-6 font-inria text-4xl font-bold tracking-tight">{persona.name}</h3>
                <p className="mt-2 text-sm">{persona.role}</p>
                <ImageFigure src={persona.image} alt={`${persona.name}, ${persona.role}`} className="mt-8" />
                <p className="mt-8 flex-1 text-sm leading-7">{persona.summary}</p>
                {[["Goals", persona.goals], ["Frustrations", persona.painPoints], ["Needs", [persona.context]]].map(([label, values]) => (
                  <div key={label} className="mt-8 border-t border-black pt-5">
                    <p className="mb-4 text-xs uppercase tracking-widest">{label}</p>
                    <ul className="space-y-3">{values.map((value) => <li key={value} className="text-sm leading-6">— {value}</li>)}</ul>
                  </div>
                ))}
              </motion.article>
            ))}
          </div>
        </motion.section>

        <ScenarioSection number="04" label="Scenario 01 — Initial concept" scenario={study.scenarioOne} />

        <EditorialSection number="05" oversized title={study.redesign?.title} description={study.redesign?.description}>
          <div className="mt-16 grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <ImageFigure className="border-t-2 border-black pt-5" src={study.redesign?.before?.image} caption={study.redesign?.before?.caption} alt="Initial smart-fridge concept" />
            <ImageFigure className="border-t-2 border-[#4f46e5] pt-5" src={study.redesign?.after?.image} caption={study.redesign?.after?.caption} alt="Redesigned portable Food Charm keychain" />
          </div>
        </EditorialSection>

        <EditorialSection
          number="06"
          title="Improving the Food-Sharing Experience"
          description="Walkthrough reviews highlighted several ways to make the food-sharing process more flexible, transparent, and convenient for users."
        >
          <div className="mt-12 grid grid-cols-5 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {study.walkthroughImprovements?.map((improvement, index) => (
              <article key={improvement.title} className="border border-black p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-inria text-3xl text-[#4f46e5]">{improvement.cue}</span>
                  <span className="text-xs">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 font-inria text-2xl leading-tight">{improvement.title}</h3>
                <p className="mt-4 text-sm leading-7">{improvement.description}</p>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          number="07"
          title={study.technologyRationale?.title}
          description={study.technologyRationale?.description}
        >
          <div className="mt-12 grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {[
              ["Initial concept — Smart fridge", study.technologyRationale?.initial],
              ["Redesigned concept — Portable keychain", study.technologyRationale?.redesigned],
            ].map(([title, items]) => (
              <div key={title} className="border-t-2 border-black pt-5">
                <h3 className="font-inria text-3xl leading-tight">{title}</h3>
                <ul className="mt-8 space-y-4">
                  {items?.map((item) => (
                    <li key={item} className="border-t border-black/30 pt-4 text-sm leading-7">— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          number="08"
          title="A Portable Interface for Local Food Sharing"
          description="The portable keychain is the main element of the redesigned Food Charm experience. It helps users share surplus food, discover nearby offers, and access the relevant community locker."
        >
          <div className="mt-12 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {study.keychainFeatures?.map((feature, index) => (
              <article key={feature.title} className="border-t border-black pt-5">
                <span className="text-xs">{String(index + 1).padStart(2, "0")}</span>
                <ImageFigure src={feature.image} alt={`Food Charm feature: ${feature.title}`} className="mt-4" />
                <h3 className="mt-5 font-inria text-2xl leading-tight">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7">{feature.description}</p>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          number="09"
          title={study.lockerNetwork?.title || "A Local Network of Community Lockers"}
          description="Community lockers are located in accessible places such as universities, student accommodation, and areas near supermarkets and restaurants. Food is intended to be collected within a short period, so standard lockers do not necessarily require refrigeration."
        >
          <div className="relative mt-12 grid grid-cols-4 gap-4 max-md:grid-cols-2">
            {study.lockerNetwork?.locations.map((location) => (
              <div key={location} className="border border-[#6366f1] bg-[#eef2ff] p-5 text-center text-sm font-medium">{location}</div>
            ))}
            <div className="col-span-2 col-start-2 border-2 border-[#4f46e5] bg-white p-6 text-center font-inria text-2xl max-md:col-span-2 max-md:col-start-1">
              Community collection lockers
              <div className="mt-4 flex justify-center gap-3 text-xs font-sans">
                <span className="border border-black px-3 py-2">Standard</span>
                <span className="border border-[#4f46e5] bg-[#eef2ff] px-3 py-2">Refrigerated when needed</span>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm leading-7 max-md:grid-cols-1">
            <p className="border-t border-black pt-4"><strong>Standard lockers.</strong> {study.lockerNetwork?.standard}</p>
            <p className="border-t border-black pt-4"><strong>Specific scenarios.</strong> {study.lockerNetwork?.refrigerated}</p>
          </div>
        </EditorialSection>

        <EditorialSection
          number="10"
          title="The Design Comparison"
          description="The original comparison is presented as a qualitative concept exploration. Its source diagram does not define a verified numerical scale, so no scores are added here."
        >
          <div className="mt-12 grid grid-cols-5 items-start gap-8 max-md:grid-cols-1">
            <div className="col-span-3">
              <ImageFigure src={study.comparison?.image} caption={study.comparison?.caption} alt="Qualitative radar comparison of the keychain and fridge concepts" />
            </div>
            <div className="col-span-2 border-t border-black pt-5">
              <p className="text-xs uppercase tracking-widest">Original dimensions</p>
              <ol className="mt-6 space-y-4">
                {study.comparison?.dimensions.map((dimension, index) => (
                  <li key={dimension} className="flex gap-4 text-sm leading-6"><span className="text-[#4f46e5]">0{index + 1}</span>{dimension}</li>
                ))}
              </ol>
            </div>
          </div>
        </EditorialSection>

        <EditorialSection
          number="11"
          title="From Fixed Infrastructure to a Portable Experience"
          description="The redesigned concept shifts the experience from a smart fridge to a portable keychain supported by community lockers. The next scenario shows how users interact with this new system, from discovering available food to collecting it."
        />

        <ScenarioSection number="12" label="Scenario 02 — Portable keychain" scenario={study.scenarioTwo} />

        <motion.section className="relative overflow-hidden border-t border-black py-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <OversizedNumber number="13" />
          <SectionLabel number="13">From paper to prototype</SectionLabel>
          <div className="relative z-10 grid grid-cols-12 gap-12 max-md:grid-cols-1">
            <h2 className="col-span-8 max-w-4xl font-inria text-6xl font-bold leading-[0.92] tracking-tight md:text-8xl">{study.process?.title}</h2>
            <p className="col-span-6 col-start-7 row-start-2 pt-8 text-sm leading-7 max-md:col-start-1 max-md:row-start-auto">{study.process?.introduction}</p>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-12 max-md:grid-cols-1">
            <div className="col-span-5">
              <p className="text-xs uppercase tracking-widest">Workshop 01</p>
              <h3 className="mt-4 font-inria text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">{study.process?.workshopOne?.title}</h3>
              <p className="mt-6 text-sm leading-7">{study.process?.workshopOne?.description}</p>
              <div className="mt-8 border-t border-black pt-5">
                <p className="mb-4 text-xs uppercase tracking-widest">What we explored</p>
                <ul className="space-y-3">
                  {study.process?.workshopOne?.purposes.map((purpose) => (
                    <li key={purpose} className="text-sm leading-7">— {purpose}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ImageFigure
              className="col-span-7"
              src={study.process?.workshopOne?.image}
              caption={study.process?.workshopOne?.imageCaption}
              alt="Handmade Tamagotchi-style paper keychains customized during the Food Charm workshop"
            />
          </div>

          <div className="mt-24 border-t border-black pt-12">
            <div className="grid grid-cols-12 gap-12 max-md:grid-cols-1">
              <div className="col-span-5">
                <p className="text-xs uppercase tracking-widest">Workshop 02</p>
                <h3 className="mt-4 font-inria text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">{study.process?.workshopTwo?.title}</h3>
                <p className="mt-6 text-sm leading-7">{study.process?.workshopTwo?.description}</p>
                <div className="mt-8 space-y-5">
                  {study.process?.workshopTwo?.questions.map((question, index) => (
                    <div key={question} className="border-l-4 border-[#4f46e5] bg-[#eef2ff] p-5">
                      <p className="text-xs uppercase tracking-widest text-[#4338ca]">Question 0{index + 1}</p>
                      <p className="mt-3 font-inria text-2xl leading-tight">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-7 flex justify-end">
                {study.process?.workshopTwo?.images.map((image) => (
                  <ImageFigure
                    key={image.caption}
                    className="w-1/2 max-md:w-3/4"
                    src={image.image}
                    caption={image.caption}
                    alt={image.alt}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 border-t-2 border-[#4f46e5] pt-12">
            <div className="grid grid-cols-12 items-start gap-12 max-md:grid-cols-1">
              <div className="col-span-4">
                <p className="text-xs uppercase tracking-widest text-[#4338ca]">{study.process?.contribution?.label}</p>
                <h3 className="mt-4 font-inria text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl">{study.process?.contribution?.title}</h3>
                <p className="mt-6 text-sm leading-7">{study.process?.contribution?.description}</p>
              </div>
              <ImageFigure
                className="col-span-8"
                src={study.process?.contribution?.image}
                caption={study.process?.contribution?.imageCaption}
                alt="Blender workspace showing the Food Charm keychain 3D model"
              />
            </div>
          </div>

          <p className="mt-16 border-t border-black pt-5 font-inria text-2xl leading-tight md:text-3xl">
            {study.process?.closing}
          </p>
        </motion.section>

        <footer className="border-t border-black py-24">
          <SectionLabel number="14">Reflection</SectionLabel>
          <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
            <h2 className="font-inria text-4xl leading-tight md:text-6xl">What this project taught me.</h2>
            <div>
              <p className="text-sm leading-7">{study.reflection?.description}</p>
              <ul className="mt-8 space-y-4">{study.reflection?.learnings?.map((item) => <li key={item} className="border-t border-black pt-4 text-sm leading-7">{item}</li>)}</ul>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
