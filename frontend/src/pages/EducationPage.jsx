import { useSelector } from "react-redux/";

export const EducationPage = () => {
  const { darkMode } = useSelector((state) => state.theme);
  return (
    <section
      className={`${
        darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
      } h-fit z-10 `}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl underline md:text-7xl  text-center md:text-start">
          Education 🎓
        </h1>
        <div className="flex items-center flex-col  justify-center mt-10 md:items-start md:justify-start md:text-4xl">
          <h2 className="text-xl md:text-2xl underline text-center ">
            B.S.I.T (information technology) ✔️
          </h2>
          <p className="md:text-xl">University of Education (Lahore)</p>
          <p className="md:text-xl">2017-2021</p>
          <p className="md:text-xl">CGPA 3.41</p>
          <p className="md:text-2xl underline mb-5">FYP (final year project)</p>
          <p className="md:text-xl text-center underline">
            Python Facial Recognition Attendance System
          </p>
          <p className="md:text-xl text-center md:text-start mb-5">
            Desktop based Application Facial recognition attendance system the
            Application has an admin panel with all validations. The admin login
            and add users to the database and captures images from the web
            camera then the model is trained and when the user marks attendance
            the app uses camera and identifies the person and automatically
            saves the record in the database with time and date also creates
            excel file and can be uploaded to cloud storage within application.
          </p>

          <p className="md:text-xl text-center md:text-start mb-5">
            Technologies used : Python3🐍, OpenCV👐, Tkinter🖥️, Pydf📄,
            Pandas🐼, Firebase🔥
          </p>

          <h2 className="text-2xl underline">F.S.C (pre-eng) ✔️ </h2>
          <p className="md:text-xl">The Educators College</p>
          <p className="md:text-xl">2014-2016</p>
          <p className="md:text-xl">70%</p>

          <h2 className="text-2xl underline">Matriculation ✔️</h2>
          <p className="md:text-xl">D.P.S Vehari</p>
          <p className="md:text-xl">2012-2014</p>
          <p className="md:text-xl md:mb-10">74%</p>

          <p></p>
        </div>
      </div>
    </section>
  );
};
