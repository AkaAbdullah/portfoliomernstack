import { useSelector } from "react-redux";

import dg from "../assets/dg.png";
import fab2 from "../assets/fab2.png";
import port from "../assets/port.png";
import outdone from "../assets/out.png";
import tell from "../assets/tell.png";
import carnetweb from "../assets/carnet.png";
import carnetadmin from "../assets/carnetadmin2.png";
import bednet from "../assets/bednet.png";
import nard from "../assets/nard2.png";
import scripid from "../assets/scripid.png";
import workforu from "../assets/work4u.png";
import bank from "../assets/bank.png";
import loginWork from "../assets/login.png";
import eres from "../assets/eres.png";
import welfare from "../assets/wellfareSermon.png";

const projects = [
  {
    id: 1,
    name: "Desert Game Studios MERN Stack ",
    demo: "https://www.desertgamestudio.com/",
    code: "https://github.com/AkaAbdullah/gamedesertfinal",
    description: "",
    image: dg,
  },
  {
    id: 2,
    name: "Carnet Web React JS",
    demo: "https://car-net-web-owks.vercel.app/",
    code: "https://github.com/AkaAbdullah/plexi2.0",
    image: carnetweb,
    description: "",
  },
  {
    id: 3,
    name: "Carnet Admin Portal MERN Stack",
    demo: "https://carnet-weld.vercel.app/",
    code: "https://github.com/AkaAbdullah/plexi2.0",
    image: carnetadmin,
    description: "",
  },
  {
    id: 4,
    name: "BEDNET  MERN Stack",
    demo: "https://bednet-web-brown.vercel.app/",
    code: "https://github.com/AkaAbdullah/plexi2.0",
    image: bednet,
    description: "",
  },

  {
    id: 5,
    name: "TelTik Voice Calling React Js",
    demo: "https://teltik.com/",
    code: "https://teltik.com/",
    image: tell,
    description: "",
  },

  {
    id: 6,
    name: "Outdone.io React Js",
    demo: "https://www.outdone.io/",
    code: "https://www.outdone.io/",
    image: outdone,
    description: "",
  },
  {
    id: 7,
    name: "Nard Foundation React Js",
    demo: "https://nard-foundation-website.vercel.app/",
    code: "https://nard-foundation-website.vercel.app/",
    image: nard,
    description: "",
  },

  {
    id: 8,
    name: "Scripid React Js",
    demo: "https://scripid-testing.vercel.app/",
    code: "https://www.outdone.io/",
    image: scripid,
    description: "",
  },
  {
    id: 9,
    name: "Work For U Tutor React Js",
    demo: "https://work4-ututor.vercel.app/",
    code: "https://www.outdone.io/",
    image: workforu,
    description: "",
  },

  {
    id: 10,
    name: "Spend Wise MEVN Stack Electron Js",
    demo: "https://abdulx.site/",
    code: "https://github.com/AkaAbdullah/portfoliomernstack",
    image: bank,
    description: "",
  },
  {
    id: 11,
    name: "Login To My Work MERN Stack",
    demo: "https://logintomywork.vercel.app/",
    code: "https://github.com/AkaAbdullah/portfoliomernstack",
    image: loginWork,
    description: "",
  },
  {
    id: 12,
    name: "ERES Compliance Management System MERN Stack",
    demo: "https://technion-frontend.pages.dev/",
    code: "https://github.com/AkaAbdullah/portfoliomernstack",
    image: eres,
    description: "",
  },
  {
    id: 13,
    name: "Wellfare Sermon Wordpress",
    demo: "https://thewelfaresermon.org/",
    code: "https://github.com/AkaAbdullah/portfoliomernstack",
    image: welfare,
    description: "",
  },
];

export const ScrollCard = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
      {projects.map(({ id, name, image, demo, code }) => (
        <div
          key={id}
          className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer  border ${
            darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
          }`}
          onClick={() => window.open(demo, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-52 object-cover hover:scale-105 transition duration-300"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center mb-2">{name}</h3>
            <div className="flex justify-center gap-4">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`px-4 py-2 w-full text-center rounded-md font-medium text-sm transition hover:scale-105 ${
                  darkMode ? "bg-blue-700 text-white" : "bg-blue-500 text-white"
                }`}
              >
                View
              </a>
              {/* <a
                href={code}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`px-4 py-2 rounded-md font-medium text-sm transition hover:scale-105 ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
                }`}
              >
                Code
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
