import { useSelector } from "react-redux";
export const LoginPage = () => {
  const { darkMode } = useSelector((state) => state.theme);
  return (
    <>
      <section
        className={`${
          darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
        } h-screen w-full flex items-center justify-center `}
      >
        <div className="container md: mx-auto max-w-6xl px-4 flex items-center justify-center ">
          <div
            className={`${
              darkMode ? "bg-neutral-800 text-white" : " bg-slate-50 text-black"
            }  shadow-lg rounded-md md:w-[400px] md:h-[300px] w-[300px] h-[300px] text-center p-4 flex items-center flex-col `}
          >
            <h1 className="text-2xl font-bold">Login</h1>
            <div className=" flex flex-col gap-7 mt-5">
              <hr />

              <input
                className={`p-2 bg-transparent border-2 rounded-md ${
                  darkMode ? "text-white" : "text-black"
                } focus:outline-none md:w-80`}
                type="text"
                placeholder="Username"
              />
              <input
                className={`p-2 bg-transparent border-2 rounded-md ${
                  darkMode ? "text-white" : "text-black"
                } focus:outline-none md:w-80`}
                type="password"
                placeholder="Password"
              />
              <button
                className={`${
                  darkMode ? "bg-neutral-900" : "bg-white"
                } border-1 shadow-md h-10 text-xl hover:scale-105 duration-200 `}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
