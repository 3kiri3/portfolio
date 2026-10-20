export default function Editorial2({ project, mainImage, projectNumber }) {
  const editorial = project.editorial ?? {};
  const sections = editorial.sections ?? [];
  const selectedIndex = project.image.indexOf(mainImage);
  const selectedSection = sections.find((section) => section.image === mainImage);
  const displayedNumber =
    projectNumber ?? String(selectedIndex + 1).padStart(2, "0");
  const caption = selectedSection?.text ?? editorial.caption ?? project.title;
  const paragraph =
    selectedSection?.paragraph ??
    project.description[selectedIndex] ??
    project.description[0];

  return (
    <div className="relative min-h-screen w-full pb-40">
      <div className="relative ml-[16.6667%] z-10 w-[66.6666%] max-md:ml-0 max-md:w-[calc(100%-2rem)]">
        <div className="group mb-2 flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row flex-wrap gap-4">
            <p className="bg-black p-2 text-sm text-white">{project.title}</p>
            <p className="bg-black p-2 text-sm text-white">{project.year}</p>
            <p className="bg-black p-2 text-sm text-white">
              {project.technologies.join(", ")}
            </p>
          </div>

          <div className="relative shrink-0">
            <button
              type="button"
              className="border border-black bg-white px-4 py-2 text-sm text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Thought process
            </button>
            <div className="pointer-events-none invisible absolute right-0 top-full z-20 mt-4 w-80 border border-white/60 bg-white/75 p-6 text-left text-sm leading-relaxed opacity-0 shadow-xl backdrop-blur-xl transition duration-200 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
              <div className="max-h-64 space-y-4 overflow-y-auto">
                <p>{paragraph}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-visible">
          <img
            src={mainImage}
            alt={project.title}
            className="w-full object-contain shadow-lg"
          />
          <div className="absolute bottom-0 right-[-5%] z-10 translate-y-1/2 font-inria text-[clamp(5rem,14vw,14rem)] leading-none text-black">
            {displayedNumber}
          </div>
        </div>

        <div className="mt-12 border-t border-black pt-6 text-left">
          <div className="flex items-baseline gap-4 text-[28px] leading-tight">
            <span>{displayedNumber} /</span>
            <h2>{caption}</h2>
          </div>
        </div>

        <div className="mt-12 border-b border-black" />

        <div className="grid grid-cols-2 gap-12 pt-12 text-left max-md:grid-cols-1 max-md:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em]">
              {editorial.challengeLabel ?? "The Challenge"}
            </p>
            <p className="mt-5 max-w-md text-[28px] font-bold leading-tight">
              {editorial.challenge ?? "Less searching. More discovering."}
            </p>
          </div>

          <div>
            <p className="max-w-md text-sm leading-relaxed">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}