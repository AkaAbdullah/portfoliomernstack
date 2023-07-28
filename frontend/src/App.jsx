import { NavBar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { About } from "./pages/About";
import { AdminPage } from "./pages/AdminPage";
import { LandingPage } from "./pages/LandingPage";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <section>
      <NavBar />
      <LandingPage />
      <About />
      <Portfolio />
      <SocialLinks />
    </section>
  );
}

export default App;
