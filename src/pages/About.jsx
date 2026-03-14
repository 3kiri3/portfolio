import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col px-4 ">
      {/* NavBar */}
      <nav className="w-full h-16 flex items-center px-8 border-b border-black ">
        <span className="font-bold text-xl"></span>
      </nav>
      {/* Main content */}
      <div className="flex flex-col w-full flex-1 pt-8 mt-4 gap-4">
        {/* Colonne 1 : 20% */}
        <div className="w-2/4 flex flex-col items-start border-b border-black pb-8">
          <h1 className="text-5xl font-bold mb-4">Who's Yousra ?</h1>
        </div>
        {/* Colonne 2 : 80% */}
        <div className="w-full flex flex-1 flex-col gap-8">
          {/* Row de 3 éléments */}
          <div className="flex flex-row flex-1 h-full gap-24">

            <div className="flex flex-col flex-1 justify-between gap-4 pb-8 pt-36">
              {/* Bloc 1 */}
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4 ">
                <span className="text-lg font-normal">01.</span>
                <span className="text-lg font-bold">who am I ?</span>
                <p className="text-lg text-left font-normal">Student in Paris-Saclay HCI Master, Designer UX/UI & web developer with a background in computer science. I focus on building clean, thoughtful digital experiences at the intersection of design and code.</p>
              </div>
              {/* Bloc 2 */}
              <div className="flex flex-col  items-start border-b border-black gap-2 pb-4">
                <span className="text-lg font-normal">02.</span>
                <span className="text-lg font-bold">work</span>
                <p className="text-lg font-normal">Court paragraphe sur un autre aspect du travail.</p>
              </div>
            </div>
            
            <div className="flex flex-col flex-1 gap-12 pb-8 ">
              {/* Bloc 1 */}
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4 ">
                <span className="text-lg font-normal">03.</span>
                <span className="text-lg font-bold">work</span>
                <p className="text-lg font-normal">Court paragraphe sur le travail ou l'expérience.</p>
              </div>
              {/* Bloc 2 */}
              <img
                src={"/src/img/lune2.png"}
                alt="Lune"
                className="w-128 h-128 object-contain self-end"
            />
            </div>

            <div className="flex flex-col flex-1 justify-start gap-18 pb-8 ">
              {/* Bloc 1 */}
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4 ">
                <span className="text-lg font-normal">04.</span>
                <span className="text-lg font-bold">work</span>
                <p className="text-lg font-normal">Court paragraphe sur le travail ou l'expérience.</p>
              </div>
              <img
                src={"/src/img/visage.png"}
                alt="Visage"
                className="w-128 h-80 object-contain pl-40"
            />
              {/* Bloc 2 */}
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4">
                <span className="text-lg font-normal">05.</span>
                <span className="text-lg font-bold">work</span>
                <p className="text-lg font-normal">Court paragraphe sur un autre aspect du travail.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}