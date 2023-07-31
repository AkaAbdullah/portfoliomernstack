import React from "react";
import dg from "../assets/dg.png";
import fab1 from "../assets/fab1.png";
import fab2 from "../assets/fab2.png";
import tell from "../assets/teltik.png";
import outdone from "../assets/outdone.png";
import port from "../assets/port.png";

const projects = [
  {
    id: 1,
    name: "Desert Game Studios MERN stack website",
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
    name: "Outdone.io React js web app",
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
      {projects.map(({ id, name, child }) => (
        <div key={id} className=" rounded-lg border ">
          <p className="text-center    ">{name}</p>
          {child}
          <div className="flex items-center  justify-evenly">
            <button className="w-1/4 px-2 py-1 m-2 duration-200 hover:scale-105 bg-neutral-500 rounded-md hover:bg-neutral-800">
              Demo
            </button>
            <button className="w-1/4 px-2 py-1 m-2 duration-200 hover:scale-105 bg-neutral-500 rounded-md hover:bg-neutral-800">
              Code
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
