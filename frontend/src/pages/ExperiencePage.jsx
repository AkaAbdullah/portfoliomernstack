import { useSelector } from "react-redux";

const jobs = [
  {
    id: 1,
    title: "Suave Solutions",
    location: "Lahore",
    description: "Assistant Operations Manager",
    duration: "January-2022 - April-2022",
    details:
      "During this Time Period I worked as Assitant Manager and managed  the  USA Warehosue to send Shipments to customers also managed Amazon Seller Central Account to list products on Amazon and Ebay Store including other Market places",
  },
  {
    id: 2,
    title: "Senarios",
    location: "Lahore",

    description: "React js Developer",
    duration: "May-2022 - March-2023",
    details:
      "Developing and implementing highly responsive user interface components using react concepts  -Involved in all stages of the development life cycle initial analysis, implementation, integration, testing and debugging ",
  },
  {
    id: 3,
    title: "Desert Game studios",
    location: "Lahore",

    description: "MERN Stack Developer",
    duration: "March-2023 - Continue",
    details:
      "Translating wireframe designs into web applications. Developing back-end applications using Node.js and Express.js. Designing and developing APIs Working alongside graphic designers for web design features",
  },
];

export const ExperiencePage = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section
      name="Experience"
      className={`w-full   h-full md:h-screen flex flex-col justify-center items-center gap-10  ${
        darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
      } `}
    >
      <div className="container mx-auto max-w-6xl p-4  text-center md:text-start">
        <p className="text-5xl  underline md:text-6xl ">Experience</p>
      </div>
      <div className="flex flex-col md:flex-row   items-center gap-10 md:gap-24 ">
        {jobs.map(({ id, title, description, duration, details, location }) => (
          <div
            key={id}
            className={` w-[270px] h-52  ${
              darkMode ? "bg-neutral-800 " : "bg-white"
            } rounded-lg text-center shadow-lg overflow-hidden mb-10 md:w-[310px]   hover:scale-105 duration-200`}
          >
            <div className="flex flex-col items-center justify-center  h-full ">
              <p className="text-xl font-bold bg-blue-700 w-full ">{title}</p>
              <span className="text-xs"> ({location})</span>
              <p className=" text-xs">{duration}</p>
              <p className=" text-base  bg-yellow-600 w-full ">{description}</p>
              <p className="text-xs md:text-sm">{details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
