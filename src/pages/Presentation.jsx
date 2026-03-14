import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projectsData";
import Projects from "./Projects";
import Case from "./Case";
import lune from "../img/lune.png";

export default function Presentatio() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col justify-start items-start gap-0">
      <div className="relative w-full h-auto flex items-start justify-start flex-col gap-4 py-40 px-4">
          <div className="w-full h-auto flex items-start justify-start flex-row gap-0">
              <p className="text-6xl my-0 mx-0">Name: Yousra</p>
              <p className="text-xl my-0 mx-0">(kiri)</p>
          </div>
          <p className="text-6xl my-0 mx-0 p-0">Role: Web Developer and UI/UX designer</p>
      </div>
      <div className="w-full h-auto flex px-0 flex-row justify-end items-end">
        <img
          src={lune}
          alt="Scroll down"
          className=" object-contain scale-90"
        />
      </div>
    </div>
  );
}