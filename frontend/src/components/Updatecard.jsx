import { useSelector } from "react-redux";

export const Updatecard = (props) => {
  const { text } = props;
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className="w-[350px] md:w-[650px] lg:w-[950px] h-64 shadow-lg border rounded-lg flex items-center justify-center flex-col gap-3 ">
      <h1 className="text-xl text-center">
        {text}
        <hr />
      </h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <textarea
          className={`p-2 bg-transparent border-2 rounded-md ${
            darkMode ? "text-white" : "text-black"
          } focus:outline-none w-[300px] md:w-[600px] lg:w-[900px] `}
          rows={4}
          placeholder="Description"
        />
        <button
          className={`${
            darkMode
              ? "bg-neutral-800 hover:bg-neutral-700 "
              : "bg-white hover:bg-slate-200"
          } w-[300px] md:w-[600px] lg:w-[900px] text-center border-2 rounded-md h-10 p-1 shadow-md cursor-pointer  `}
        >
          update
        </button>
      </div>
    </div>
  );
};
