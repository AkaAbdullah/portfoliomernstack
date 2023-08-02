import React from "react";
import { LandingPage } from "./LandingPage";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { SkillsPage } from "./SkillsPage";
import { ExperiencePage } from "./ExperiencePage";
import { ContactPage } from "./ContactPage";
import { SocialLinks } from "../components/SocialLinks";

export const MainPage = () => {
  return (
    <>
      <LandingPage />
      <About />
      <Portfolio />
      <SkillsPage />
      <ExperiencePage />
      <ContactPage />
      <SocialLinks />
    </>
  );
};
