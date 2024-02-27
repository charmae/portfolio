import SkillSection from "./components/sections/skill";
import About from "./components/sections/about";
import ProjectSection from "./components/sections/projects";
import ContactSection from "./components/sections/contact";


export default function Home() {
  return (
    <>
    <About/>
    <SkillSection/>
    <ProjectSection/>
    <ContactSection/>
    </>
  );
}
