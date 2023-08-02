import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

import { ToogleButton } from "./ToogleButton";
export const NavBar = () => {
  const { darkMode } = useSelector((state) => state.theme);

  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Experience",
    },

    {
      id: 6,
      link: "Contact",
    },
  ];

  return (
    <>
      <div
        className={` w-full h-20  fixed  ${
          darkMode
            ? "backdrop-blur-xl drop-shadow-md"
            : "bg-white drop-shadow-md"
        } flex items-center`}
      >
        <div
          className={`flex container mx-auto max-w-6xl justify-between p-4 z-10 items-center ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <nav>
            <Link
              to="Home"
              smooth
              duration={500}
              className="text-5xl cursor-pointer"
            >
              ᗋ <span className="text-2xl -ml-3">bdullah.</span>
            </Link>
          </nav>
          <div className="  ml-[100px] md:ml-[350px]">
            <ToogleButton />
          </div>
          <ul className=" hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className={`px-4 cursor-pointer capitalize font-medium ${
                  darkMode ? "text-gray-400" : "text-black"
                } hover:scale-105 duration-200`}
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-gray-400  z-10 md:hidden "
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul
              className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
              }  `}
            >
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4  cursor-pointer capitalize py-6  text-4xl"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
