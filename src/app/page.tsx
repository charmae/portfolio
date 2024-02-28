import SkillSection from "./components/sections/skill";
import About from "./components/sections/about";
import ProjectSection from "./components/sections/projects";
import ContactSection from "./components/sections/contact";
import PlausibleProvider from "next-plausible";

export default function Home() {
  return (
    <PlausibleProvider domain="gcharmae.com">
      <About />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </PlausibleProvider>
  );
}
