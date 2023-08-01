import React from "react";

export const ContactPage = () => {
  return (
    <section
      name="Contact"
      className="bg-neutral-900 w-full h-screen text-white "
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
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none md:w-80 "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter You Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none md:w-80 "
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Enter you Message"
              className="p-2 bg-transparent border-2 rounded-md text-white  focus:outline-none md:w-80 "
            ></textarea>
            <button className=" bg-gradient-to-b  border text-xl md:text-2xl from-slate-600 to caret-yellow-300 md:w-80 h-12 rounded-md">
              Lets Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
