import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
export const NavBar = () => {
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
      link: "Contact",
    },
  ];

  return (
    <>
      <div className=" w-full h-20  fixed     backdrop-blur-xl flex items-center ">
        <div className="flex container mx-auto max-w-6xl justify-between p-4 z-10 items-center text-white">
          <nav className="">
            <h1 className="text-5xl">
              ᗋ <span className="text-2xl -ml-3">bdullah.</span>
            </h1>
          </nav>
          <ul className=" hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 "
              >
                {link}
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
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4  cursor-pointer capitalize py-6  text-4xl"
                >
                  {link}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
