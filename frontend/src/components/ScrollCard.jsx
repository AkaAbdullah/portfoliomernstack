import React from "react";
import dg from "../assets/dg.png";
import fab1 from "../assets/fab1.png";
import fab2 from "../assets/fab2.png";
import port from "../assets/port.png";
import outdone from "../assets/out.png";
import tell from "../assets/tell.png";

const projects = [
  {
    id: 1,
    name: "Desert Game Studios MERN stack website",
    demo: "https://www.desertgamestudio.com/",
    code: "https://github.com/AkaAbdullah/gamedesertfinal",
    child: (
      <img
        src={dg}
        alt="hh"
        className="rounded-md hover:scale-105 duration-200 mt-2"
      />
    ),
  },
  {
    id: 2,
    name: "MERN STACK Order Managemnet Systems",
    demo: "https://fabplexiv-2.netlify.app/login",
    code: "https://github.com/AkaAbdullah/plexi2.0",
    child: (
      <img
        src={fab1}
        alt="hh"
        className="rounded-md  mt-2 hover:scale-105 duration-200"
      />
    ),
  },
  {
    id: 3,
    name: "Admin Dashboard MERN satck ",
    demo: "https://fabplexiv-2.netlify.app/login",
    code: "https://github.com/AkaAbdullah/plexi2.0",
    child: (
      <img
        src={fab2}
        alt="hh"
        className="rounded-md mt-2 hover:scale-105 duration-200"
      />
    ),
  },
  {
    id: 4,
    name: "TelTik voice calling web app React",
    demo: "https://teltik.com/",
    code: "https://teltik.com/",
    child: (
      <img
        src={tell}
        alt="hh"
        className="rounded-md mt-2 hover:scale-105 duration-200"
      />
    ),
  },
  {
    id: 5,
    name: "Outdone.io React Js web App",
    demo: "https://www.outdone.io/",
    code: "https://www.outdone.io/",
    child: (
      <img
        src={outdone}
        alt="hh"
        className="rounded-md mt-2 hover:scale-105 duration-200"
      />
    ),
  },
  {
    id: 6,
    name: "MERN STACK Portfolio ",
    demo: "https://abdulx.site/",
    code: "https://github.com/AkaAbdullah/portfoliomernstack",
    child: (
      <img
        src={port}
        alt="hh"
        className="    rounded-md mt-2 hover:scale-105  duration-200"
      />
    ),
  },
];

export const ScrollCard = () => {
  return (
    <>
      {projects.map(({ id, name, child, demo, code }) => (
        <div key={id} className=" rounded-lg border ">
          <p className="text-center">{name}</p>
          {child}
          <div className="flex items-center  justify-evenly">
            <a
              target="_blank"
              rel="noreferrer"
              href={demo}
              className="w-1/4 text-center px-2 py-1 m-2 duration-200 hover:scale-105  bg-gradient-to-b from-slate-600  border to caret-yellow-200 rounded-md hover:bg-neutral-800"
            >
              Demo
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={code}
              className="w-1/4 px-2 py-1 text-center m-2 duration-200 hover:scale-105  bg-gradient-to-b from-slate-600 border to caret-yellow-200 rounded-md hover:bg-neutral-800"
            >
              Code
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
