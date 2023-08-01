import { BsInstagram, BsYoutube } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";

export const Footer = () => {
  return (
    <section className="bg-neutral-800 w-full h-36 md:h-56  shaow-xl text-white">
      <div className="container mx-auto max-w-6xl px-4 pt-7 md:py-0 ">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl text-center font-bold md:text-5xl py-2 ">
            ᗋbdullah Hussain<span className="text-xs"> &copy;</span>
          </h1>
        </div>
        <div className=" flex gap-5 items-center justify-center mt-2 mb-2 w-full ">
          <a
            className="hover:scale-150  duration-200"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/AttariAkOfficial/"
          >
            <BiLogoFacebookSquare size={30} color="blue" />
          </a>
          <a
            className="hover:scale-150  duration-200"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/attari_ak/"
          >
            <BsInstagram size={25} color="orange" />
          </a>
          <a
            className="hover:scale-150  duration-200"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCUE5oyyeOAjrAO10TPy96-g"
          >
            <BsYoutube size={30} color="red" />
          </a>
        </div>
        <div className=" hidden md:flex flex-col items-center gap-3">
          <label className="text-xl  ">Subscribe to news letter</label>
          <input
            autoFocus
            placeholder="email"
            className=" bg-transparent border rounded-sm focus:outline-none p-1"
          />
          <button className="w-24 rounded-md h-8 bg-blue-700  ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
