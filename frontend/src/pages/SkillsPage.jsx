import {
  BiLogoRedux,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { SiBulma, SiExpress, SiNextdotjs, SiFramer } from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "HTML5",
    child: (
      <div>
        <AiFillHtml5 size={80} color="orange" />
      </div>
    ),
  },
  {
    id: 2,
    name: "CSS3",
    child: (
      <div>
        <BiLogoCss3 size={80} color="blue" />
      </div>
    ),
  },
  {
    id: 3,
    name: "Javascript",
    child: (
      <div>
        <BiLogoJavascript size={80} color="yellow" />
      </div>
    ),
  },
  {
    id: 4,
    name: "React Js",
    child: (
      <div>
        <BiLogoReact size={80} color="blue" />
      </div>
    ),
  },
  {
    id: 5,
    name: "Redux Toolkit",
    child: (
      <div>
        <BiLogoRedux size={80} color="blue" />
      </div>
    ),
  },
  {
    id: 6,
    name: "Next JS",
    child: (
      <div>
        <SiNextdotjs size={80} color="black" />
      </div>
    ),
  },
  {
    id: 7,
    name: "Tailwind CSS",
    child: (
      <div>
        <BiLogoTailwindCss size={80} color="#b8c2cc" />
      </div>
    ),
  },
  {
    id: 8,
    name: "Framer Motion",
    child: (
      <div>
        <SiFramer size={80} color="purple" />
      </div>
    ),
  },

  {
    id: 10,
    name: "NODE js",
    child: (
      <div>
        <FaNode size={80} color="#3c873a" />
      </div>
    ),
  },

  {
    id: 12,
    name: "Mongo DB",
    child: (
      <div>
        <BiLogoMongodb size={80} color="darkgreen" />
      </div>
    ),
  },
];

export const SkillsPage = () => {
  return (
    <>
      <section
        name="skills"
        className="w-full md:h-screen flex justify-center items-center flex-col  bg-neutral-900 text-white"
      >
        <div className="container mx-auto p-4 max-w-6xl ">
          <div className=" flex md:flex-col md:items-start items-center justify-center mt-10 mb-5 ">
            <p className="text-6xl md:text-7xl underline ">Skills</p>
          </div>
          <p className="text-sm md:text-xl text-center md:text-start ">
            Following are some of the Technologies I Love to work with including
            JavaScript, React, Html5, CSS3, Node js, Redux toolkit, MongoDb
          </p>
          <div className="flex flex-row gap-20 mt-10 flex-wrap justify-evenly md:gap-20 ">
            {skills.map(({ id, name, child }) => (
              <div
                key={id}
                className="w-[140px] h-20  hover:scale-105 duration-200  flex flex-col items-center justify-center "
              >
                {child}
                <p className="text-center">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
