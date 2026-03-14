import React from "react";

const projects = [
  {
    id: 1,
    title: "Life App",
    role: "UI/UX • Front-end",
    image: "/projects/life.jpg",
  },
  {
    id: 2,
    title: "Editorial Website",
    role: "UI/UX • Dev",
    image: "/projects/editorial.jpg",
  },
  {
    id: 3,
    title: "Meal Planner",
    role: "Front-end",
    image: "/projects/meal.jpg",
  },
  {
    id: 4,
    title: "Travel Blog",
    role: "UI/UX • Front-end",
    image: "/projects/travel.jpg",
  },
  {
    id: 5,
    title: "E-commerce Shop",
    role: "Front-end",
    image: "/projects/shop.jpg",
  },
  {
    id: 6,
    title: "Portfolio 2025",
    role: "UI/UX • Dev",
    image: "/projects/portfolio.jpg",
  },
];

export default function Test() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-start items-center px-6 overflow-hidden relative gap-16">
      {/* Grand numéro en fond */}
      <div className="w-auto absolute bottom-0 right-3 z-0 mx-0 my-0 leading-none translate-x-8" style={{ fontSize: "30rem", pointerEvents: "none"}}>
        01
      </div>
      {/* Header */}
      <div className="w-full flex flex-row justify-between items-end mt-20">
        <p className="text-9xl my-0 mx-0 translate-x-[-0.5rem]">Browse</p>
        <div className="w-32 h-16 rounded-lg flex items-end justify-end">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-px h-[50%] bg-black"
              style={{ marginLeft: i === 0 ? 0 : '0.7rem' }}
            />
          ))}
        </div>
      </div>
      {/* Main content */}

      <div className="w-full h-[70%] flex flex-row gap-48 min-h-0 ">
        {/* Infos projet */}
        <div className="h-[95%] w-[20%] flex flex-col justify-between items-start min-w-0 ">
          <div className="w-full text-left space-y-2 ">
            <p className="text-2xl font-light">Project : </p>
            <p className="text-2xl font-light">Role : </p>
            <p className="text-2xl font-light">Year : </p>
            <p className="text-2xl font-light">Status : </p>
            <div className="w-2/3 h-full border border-black rounded-lg"></div>
          </div>
          <p className="text-2xl font-light">View Case Study</p>
        </div>

        {/* Aperçu projet */}
        <div className="w-[50%] h-[95%] flex flex-col justify-start items-start min-w-0">
          <p className="text-1xl font-light mb-2">Load project 01</p>
          <div className="relative w-full flex-1 min-h-0">
            <div className="absolute top-0 w-full h-full bg-blue-300 rounded-xl" />
            <div className="absolute bottom-0 w-full h-[95%] bg-blue-400 rounded-xl" />
            <div className="absolute bottom-0 w-full h-[90%] bg-blue-500 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}