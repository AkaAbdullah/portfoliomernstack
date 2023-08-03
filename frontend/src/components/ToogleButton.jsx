import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/themeSlice";

export const ToogleButton = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div
      className={` w-14 h-7  ${
        darkMode
          ? "bg-neutral-700 flex  justify-end p-1 "
          : "bg-white  shadow-inner border  px-1 "
      }  cursor-pointer  rounded-full flex items-center   `}
    >
      <div
        onClick={handleToggleMode}
        className=" bg-yellow-500  drop-shadow-lg rounded-full w-6 h-6  transition-all duration-500 "
      ></div>
    </div>
  );
};
