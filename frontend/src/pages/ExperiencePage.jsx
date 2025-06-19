import { useSelector } from "react-redux";

const jobs = [
  {
    id: 1,
    title: "Earn Flex",
    location: "Islamabad",
    description: "MERN Stack Developer",
    duration: "August 2024 – Present",
    details:
      "Responsible for translating wireframes into interactive web applications using React. Developed backend services with Node.js and Express.js. Designed and implemented RESTful APIs. Collaborated with UI/UX designers to integrate front-end features.",
  },
  {
    id: 2,
    title: "Tx Dynamics",
    location: "Lahore",
    description: "MERN Stack Developer",
    duration: "July 2024 – November 2024",
    details:
      "Worked on full-stack development using the MERN stack. Focused on building scalable APIs and responsive user interfaces. Participated in design discussions and collaborated closely with the design team to deliver consistent UI/UX experiences.",
  },
  {
    id: 3,
    title: "Desert Game Studios",
    location: "Lahore",
    description: "MERN Stack Developer",
    duration: "March 2023 – June 2024",
    details:
      "Built and maintained web applications using React, Node.js, and Express. Developed backend functionality and database integrations. Focused on optimizing performance and ensuring seamless data flow between client and server.",
  },
  {
    id: 4,
    title: "Senarios",
    location: "Lahore",
    description: "React.js Developer",
    duration: "May 2022 – March 2023",
    details:
      "Developed highly responsive and reusable UI components using React. Participated in the full software development lifecycle, including requirement analysis, implementation, testing, and debugging. Focused on user experience and performance optimization.",
  },
  {
    id: 5,
    title: "Suave Solutions",
    location: "Lahore",
    description: "Assistant Operations Manager",
    duration: "January 2022 – April 2022",
    details:
      "Managed daily operations for a U.S.-based warehouse, overseeing shipment logistics. Handled product listings on Amazon Seller Central and eBay. Coordinated inventory management and order fulfillment across multiple online marketplaces.",
  },
];

export const ExperiencePage = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section
      name="Experience"
      className={`w-full py-16 ${
        darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl md:text-6xl font-bold underline text-center md:text-start mb-12">
          Experience
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map(
            ({ id, title, description, duration, details, location }) => (
              <div
                key={id}
                className={`rounded-lg shadow-md p-6 transition-transform duration-200 hover:scale-105 ${
                  darkMode ? "bg-neutral-800" : "bg-gray-100"
                }`}
              >
                <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300 mb-1">
                  {location} &bull; {duration}
                </p>
                <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400 mb-3">
                  {description}
                </p>
                <p className="text-sm text-justify leading-relaxed">
                  {details}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
