import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";

import resume from "../assets/Resume-Abdullah-Hussain.pdf";
export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linked In <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/syed-abdullah-hussain-a78106165/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AkaAbdullah",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:akaabdullah@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          WhatsApp <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/923347155206",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
        <ul className="">
          {links.map(({ id, child, href, download }) => (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-14 px-4 bg-blue-900 ml-[-100px]  hover:ml-[0px] duration-300 "
            >
              <a
                className="flex justify-between items-center w-full text-white"
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                <>{child}</>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
