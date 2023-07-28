import React from "react";
import chart from "../assets/chart.png";
import main from "../assets/main.png";
import dgs from "../assets/dg.png";
import teltik from "../assets/teltik.png";
import outdone from "../assets/outdone.png";

const projects = [
  {
    id: 1,
    name: "MERN STACK Order Managemnet Systems",
    child: (
      <img
        src={chart}
        alt="hh"
        className="rounded-md hover:scale-105 duration-200 w-fit"
      />
    ),
  },
  {
    id: 2,
    name: "MERN STACK Order Managemnet Systems",
    child: (
      <img
        src={main}
        alt="hh"
        className="rounded-md hover:scale-105 duration-200"
      />
    ),
  },
  {
    id: 3,
    name: "MERN STACK Order Managemnet Systems",
    child: (
      <img
        src={dgs}
        alt="hh"
        className="rounded-md hover:scale-105 duration-200"
      />
    ),
  },
  {
    id: 4,
    name: "MERN STACK Order Managemnet Systems",
    child: (
      <img
        src={teltik}
        alt="hh"
        className="rounded-md hover:scale-105 duration-200"
      />
    ),
  },
  {
    id: 5,
    name: "MERN STACK Order Managemnet Systems",
    child: (
      <img
        src={outdone}
        alt="hh"
        className="rounded-md hover:scale-105 duration-200"
      />
    ),
  },
];

export const ScrollCard = () => {
  return (
    <>
      {projects.map(({ id, name, child }) => (
        <div className="shadow-md shadow-gray-600 rounded-lg">
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
