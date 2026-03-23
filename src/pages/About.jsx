import React from "react";
import lune from "../img/lune2.png";
import visage from "../img/visage.png";

export default function About() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col px-4 ">
      <nav className="w-full h-16 flex items-center px-8 border-b border-black ">
        <span className="font-bold text-xl"></span>
      </nav>
      <div className="flex flex-col w-full flex-1 pt-8 mt-4 gap-4">
        
        <div className="w-2/4 flex flex-col items-start border-b border-black pb-8">
          <h1 className="text-5xl font-bold mb-4">Who's Yousra ?</h1>
        </div>

        <div className="w-full flex flex-1 flex-col gap-8">
          <div className="flex flex-row flex-1 h-full gap-24">

            <div className="flex flex-col flex-1 justify-between gap-4 pb-8 pt-36">
              
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4 ">
                <span className="text-lg font-normal">01.</span>
                <span className="text-lg font-bold">who am I ?</span>
                <p className="text-lg text-left font-normal">Student in Paris-Saclay HCI Master, Designer UX/UI & web developer with a background in computer science.</p>
              </div>
              
              <div className="flex flex-col  items-start border-b border-black gap-2 pb-4">
                <span className="text-lg font-normal">02.</span>
                <span className="text-lg font-bold">Work</span>
                <p className="text-lg font-normal text-left">Here you'll be able to access some projects I did during my Masters and some personal projects !</p>
              </div>
            </div>
            
            <div className="flex flex-col flex-1 gap-12 pb-8 ">
              
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4 ">
                <span className="text-lg font-normal">03.</span>
                <span className="text-lg font-bold">Hobbies</span>
                <p className="text-lg font-normal text-left">I enjoy creating pretty things, might it be digital interfaces, 3D art or physical objects.</p>
              </div>
              
              <img
                src={lune}
                alt="Lune"
                className="w-full h-full object-contain self-end"
            />
            </div>

            <div className="flex flex-col flex-1 justify-start gap-18 pb-8 ">
              
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4 ">
                <span className="text-lg font-normal">04.</span>
                <span className="text-lg font-bold">My Art</span>
                <p className="text-lg font-normal text-left">I've been drawn to art since my childhood, painting and mostly sculpting. Polymer clay art has always been my favorite and the one I mastered the most.</p>
              </div>
              <img
                src={ visage}
                alt="Visage"
                className="w-[90%] h-[70%] object-contain pl-40"
            />
              <div className="flex flex-col items-start border-b border-black gap-2 pb-4">
                <span className="text-lg font-normal">05.</span>
                <span className="text-lg font-bold">Future</span>
                <p className="text-lg font-normal text-left">I aspire to create a positive impact through my work, blending technology and art to craft meaningful experiences.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}