import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { LandingPage } from "./pages/LandingPage";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { SkillsPage } from "./pages/SkillsPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ContactPage } from "./pages/ContactPage";
import { EducationPage } from "./pages/EducationPage";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
      <Portfolio />
      <SkillsPage />
      <ExperiencePage />
      <EducationPage />
      <ContactPage />
      <SocialLinks />
      <Footer />
    </>
  );
}

export default App;
