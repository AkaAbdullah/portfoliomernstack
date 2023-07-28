import { BiRightArrow } from "react-icons/bi";
import mypic from "../assets/profile.png";

export const LandingPage = () => {
  return (
    <>
      <div name="home" className="  h-screen bg-neutral-900 text-white ">
        <div className="container mx-auto z-10 max-w-6xl p-4 flex flex-col  items-center justify-center h-full md:flex-row">
          <div className="flex  flex-col justify-center items-center md:items-start  md:h-full mt-10 md:mt-0 ">
            <h2 className=" text-2xl md:text-6xl   ">Hey, There I'm</h2>
            <h1 className=" text-4xl md:text-7xl font-medium text-bold ">
              ᗋbdullah Hussain
            </h1>
            <p className="text-xl font-medium">
              I'm a Full Stack web developer
            </p>
            <hr />
            <p className="">
              Born in Vehari Lives in Lahore Raised in 90's now avalible for you
              I've spent the last 1 year building and scaling software for some
              pretty cool companies. yes, and this website is not a downloaded
              template 😎
            </p>
            <div>
              <button className="group font-bold text-white text-xl w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <BiRightArrow size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div>
            <img
              src={mypic}
              alt="profilei"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
