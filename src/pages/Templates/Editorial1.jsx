export default function Editorial1({ project, mainImage, projectNumber }) {
  const editorial = project.editorial ?? {};
  const selectedIndex = project.image.indexOf(mainImage);
  const imageGroups = editorial.imageGroups ?? [];
  const selectedGroup = imageGroups.find((group) => group.includes(selectedIndex));
  const groupImages = selectedGroup ?? [selectedIndex];
  const relatedImages = groupImages
    .filter((index) => index !== selectedIndex)
    .map((index) => ({
      image: project.image[index],
      index,
      description: project.description[index] ?? project.description[0],
    }));
  const displayedNumber =
    projectNumber ?? String(selectedIndex + 1).padStart(2, "0");
  const caption = editorial.caption ?? project.title;
  const paragraph =
    project.description[selectedIndex] ??
    project.description[0];

  return (
    <div className="relative min-h-screen w-full pb-40">
      <div className="relative ml-[16.6667%] z-10 w-[66.6666%] max-md:ml-0 max-md:w-[calc(100%-2rem)]">
        <div className="mb-2 flex flex-row flex-wrap gap-4">
          <p className="bg-black p-2 text-sm text-white">{project.title}</p>
          <p className="bg-black p-2 text-sm text-white">{project.year}</p>
          <p className="bg-black p-2 text-sm text-white">
            {project.technologies.join(", ")}
          </p>
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

        <div className="mt-24 flex flex-col gap-24">
          {relatedImages.map(({ image, index, description }, relatedIndex) => {
            const imageOnLeft = relatedIndex % 2 === 0;
            const imageElement = (
              <img
                src={image}
                alt={`${project.title} detail ${index + 1}`}
                className="w-full object-cover shadow-lg"
              />
            );
            const textElement = (
              <p className="pt-1 text-sm leading-relaxed">{description}</p>
            );

            return (
              <div
                key={image}
                className="grid grid-cols-2 items-start gap-12 max-md:grid-cols-1"
              >
                {imageOnLeft ? imageElement : textElement}
                {imageOnLeft ? textElement : imageElement}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}