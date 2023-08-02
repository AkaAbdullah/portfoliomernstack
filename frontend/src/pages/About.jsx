import { useSelector } from "react-redux";

export const About = () => {
  const { darkMode } = useSelector((state) => state.theme);
  return (
    <section
      name="About"
      className={`w-full md:h-screen flex justify-center items-center ${
        darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
      } `}
    >
      <div className="container mx-auto p-4 max-w-6xl ">
        <div className=" flex md:flex-col md:items-start items-center justify-center mt-10 mb-5 ">
          <p className="text-6xl md:text-7xl underline ">About</p>
        </div>
        <p className="text-sm md:text-xl text-center ">
          Allow me to introduce myself: I am , a passionate Full Stack web
          developer. Over the past year, I have dedicated my time and expertise
          to create and scale impressive software for some remarkable companies.
          Being a Full Stack developer, I possess a broad skill set that enables
          me to handle both the front-end and back-end aspects of web
          development. My journey in the world of web development began with a
          strong drive to explore the vast potential of the digital realm. With
          each project I embarked on, I found myself immersed in the art of
          crafting intuitive and user-friendly interfaces. Equally, I delved
          into the intricacies of server-side programming to ensure smooth
          functionality and seamless performance.
        </p>
        <br />
        <p className="text-sm md:text-xl text-center ">
          In summary, I am Abdullah Hussain, a Full Stack web developer with a
          passion for creating exceptional software. With a year of experience
          under my belt, I am dedicated to pushing the boundaries of what is
          possible in the digital world. I look forward to embracing new
          challenges and contributing my skills to make a positive impact in the
          field of web development.
        </p>
      </div>
    </section>
  );
};
