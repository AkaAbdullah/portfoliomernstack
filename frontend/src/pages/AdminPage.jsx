import { useSelector } from "react-redux";
import { Updatecard } from "../components/Updatecard";

export const AdminPage = () => {
  const { darkMode } = useSelector((state) => state.theme);
  return (
    <>
      <section
        className={`${
          darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
        }  h-full `}
      >
        <div className="container mx-auto max-w-6xl px-4  py-24 flex flex-col items-center justify-center ">
          <h1 className="text-2xl text-center font-bold">Admin Panel</h1>

          <div className="flex items-center  flex-col md:flex-row gap-5 flex-wrap justify-around p-4 md:p-0">
            <Updatecard title="update Landing Page Description" />
          </div>
        </div>
      </section>
    </>
  );
};
