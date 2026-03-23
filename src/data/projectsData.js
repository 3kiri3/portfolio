import pochette1 from "../img/assets/pochettes/1.png";
import pochette2 from "../img/assets/pochettes/2.png";
import pochette3 from "../img/assets/pochettes/3.png";
import pochette4 from "../img/assets/pochettes/4.png";
import pochette5 from "../img/assets/pochettes/5.png";

import zoom1 from "../img/assets/zoom/1.png";
import zoom2 from "../img/assets/zoom/2.png";
import zoom3 from "../img/assets/zoom/3.png";
import zoom4 from "../img/assets/zoom/4.png";
import zoom5 from "../img/assets/zoom/5.png";
import zoom6 from "../img/assets/zoom/6.png";
import zoom7 from "../img/assets/zoom/7.png";
import zoom8 from "../img/assets/zoom/8.png";
import zoom9 from "../img/assets/zoom/9.png";
import zoom10 from "../img/assets/zoom/10.png";
import zoom11 from "../img/assets/zoom/11.png";
import zoom12 from "../img/assets/zoom/12.png";
import zoom13 from "../img/assets/zoom/13.png";

import marc1 from "../img/assets/marc/1.jpg";
import marc2 from "../img/assets/marc/2.jpg";
import marc3 from "../img/assets/marc/3.jpg";
import marc4 from "../img/assets/marc/4.jpg";
import marc5 from "../img/assets/marc/5.jpg";
import marc6 from "../img/assets/marc/6.jpg";

import foodcharm1 from "../img/assets/foodcharm/1.png";
import foodcharm2 from "../img/assets/foodcharm/2.png";
import foodcharm3 from "../img/assets/foodcharm/3.png";
import foodcharm4 from "../img/assets/foodcharm/4.png";
import foodcharm5 from "../img/assets/foodcharm/5.png";
import foodcharm6 from "../img/assets/foodcharm/6.png";
import foodcharm7 from "../img/assets/foodcharm/7.png";
import foodcharm8 from "../img/assets/foodcharm/8.png";
import foodcharm9 from "../img/assets/foodcharm/9.png";
import foodcharm10 from "../img/assets/foodcharm/10.png";
import foodcharm11 from "../img/assets/foodcharm/11.png";
import foodcharm12 from "../img/assets/foodcharm/12.png";
import foodcharm13 from "../img/assets/foodcharm/13.png";
import foodcharm14 from "../img/assets/foodcharm/14.png";
import foodcharm15 from "../img/assets/foodcharm/15.png";
import foodcharm16 from "../img/assets/foodcharm/16.png";
import foodcharm17 from "../img/assets/foodcharm/17.png";

import fly01 from "../img/assets/fly/01.png";
import fly02 from "../img/assets/fly/02.png";
import fly03 from "../img/assets/fly/03.png";
import fly04 from "../img/assets/fly/04.png";
import fly05 from "../img/assets/fly/05.png";
import fly06 from "../img/assets/fly/06.png";
import fly07 from "../img/assets/fly/07.png";
import fly08 from "../img/assets/fly/08.png";
import fly09 from "../img/assets/fly/09.png";

import chess1 from "../img/assets/chess/Play/MacBook Air - 15.png";
import chess2 from "../img/assets/chess/Play/MacBook Air - 27.png";
import chess3 from "../img/assets/chess/Watch/MacBook Air - 26.png";
import chess4 from "../img/assets/chess/MacBook Air - 9.png";
import chess5 from "../img/assets/chess/MacBook Air - 10.png";
import chess6 from "../img/assets/chess/MacBook Air - 19.png";
import chess7 from "../img/assets/chess/MacBook Air - 24.png";
import chess8 from "../img/assets/chess/MacBook Air - 33.png";


const projectsData = [
  {
    id: 1,
    title: "Judy EDA",
    description: [
      "Modern e-commerce website for handmade book pouches.",
      "I designed this site with a blend of modernity and craftsmanship.",
      "The user experience was crafted to highlight artisanal know-how."
    ],
    image: [pochette1, pochette2, pochette3, pochette4, pochette5],
    technologies: ["React", "Tailwind", "Vite"],
    year: 2025
  },
  {
    id: 2,
    title: "Zoom Pro Max",
    description: [
      "Redesign of Zoom with new features for a more flexible and interactive meeting experience.",
      "Users can fully customize their interface: choose which participants are visible and adjust the size of each video window.",
      "A new schedule panel displays the meeting agenda, shows who will speak next, and includes timing for breaks and presentations."
    ],
    image: [
      zoom1, zoom2, zoom3, zoom4, zoom5, zoom6, zoom7, zoom8, zoom9,
      zoom10, zoom11, zoom12, zoom13
    ],
    technologies: ["Figma"],
    year: 2026
  },
  {
    id: 3,
    title: "MARC – Virtual Human",
    description: [
      "Designed an interface for a virtual human to assist elderly people with their sports programs and daily routines.",
      "The design focused on accessibility, reassurance, and intuitiveness to foster autonomy and motivation.",
      "Worked with the MARC team to integrate interactive and personalized features tailored to seniors' needs."
    ],
    image: [marc1, marc2, marc3, marc4, marc5, marc6],
    technologies: ["Figma", "MARC Virtual Human"],
    year: 2025
  },
  {
    id: 4,
    title: "Relais Food Keychain",
    description: [
      "Designed a connected keychain to help students easily find nearby food relay points.",
      "The goal is to fight food waste and make food more accessible for students.",
      "The mobile interface lets users locate relay points, check availability, and receive real-time notifications."
    ],
    image: [
      foodcharm1, foodcharm2, foodcharm3, foodcharm4, foodcharm5, foodcharm6,
      foodcharm7, foodcharm8, foodcharm9, foodcharm10, foodcharm11, foodcharm12,
      foodcharm13, foodcharm14, foodcharm15, foodcharm16, foodcharm17
    ],
    technologies: ["Figma"],
    year: 2024
  },
  {
    id: 5,
    title: "Layover Planner App",
    description: [
      "Mobile app to organize layovers during international flights.",
      "Lets users know if they can leave the airport, discover restaurants, activities, and available services.",
      "Provides personalized suggestions based on layover duration and user preferences."
    ],
    image: [
      fly01, fly02, fly03, fly04, fly05, fly06, fly07, fly08, fly09
    ],
    technologies: ["React Native", "Tailwind", "OpenAI API"],
    year: 2026
  },
  {
    id: 6,
    title: "Chess.com Redesign & Pie Menu",
    description: [
      "Redesigned the chess.com interface with a pie menu, based on scientific studies showing faster navigation.",
      "Added a system to watch a live chess game while playing your own, using a split window display.",
      "The user experience was rethought to offer more fluidity and efficiency for navigation and play."
    ],
    image: [chess1, chess2, chess3, chess4, chess5, chess6, chess7, chess8],
    technologies: ["Figma", "React", "WebSocket"],
    year: 2025
  }
];

export default projectsData;