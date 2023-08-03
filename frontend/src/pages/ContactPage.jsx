import { useSelector } from "react-redux";

export const ContactPage = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section
      name="Contact"
      className={` w-full h-screen ${
        darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
      } `}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-5xl  underline md:text-6xl text-center md:text-start py-5 md:py-0 ">
          Contact
        </p>
        <p className=" text-center md:py-3 md:text-xl">
          Submit The Form Below to Get in Touch with Me
        </p>

        <div className=" md:flex md:justify-center md:items-center">
          <form
            className="flex flex-col  gap-3 md:px-0 px-4"
            action="https://getform.io/f/b57cd43f-9ff6-4b25-91fa-108764b79263"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter You name"
              className={`p-2 bg-transparent border-2 rounded-md ${
                darkMode ? "text-white" : "text-black"
              } focus:outline-none md:w-80`}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter You Email"
              className={`p-2 bg-transparent border-2 rounded-md ${
                darkMode ? "text-white" : "text-black"
              } focus:outline-none md:w-80`}
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Enter you Message"
              className={`p-2 bg-transparent border-2 rounded-md ${
                darkMode ? "text-white" : "text-black"
              } focus:outline-none md:w-80`}
            ></textarea>
            <button
              className={` ${
                darkMode
                  ? "bg-gradient-to-b from-slate-600 to caret-yellow-300"
                  : "bg-white border shadow-md"
              }  border text-xl md:text-2xl  md:w-80 h-12 rounded-md hover:scale-105 duration-200 `}
            >
              Lets Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
