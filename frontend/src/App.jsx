import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { About } from "./pages/About";
// import { AdminPage } from "./pages/AdminPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { LandingPage } from "./pages/LandingPage";
import { Portfolio } from "./pages/Portfolio";
import { SkillsPage } from "./pages/SkillsPage";

function App() {
  return (
    <section>
      <NavBar />
      <LandingPage />
      <About />
      <Portfolio />
      <SkillsPage />
      <ExperiencePage />
      <ContactPage />
      <Footer />
      <SocialLinks />
    </section>
  );
}

export default App;
