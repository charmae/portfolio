import Image from "next/image";
import Link from "next/link";
import SkillSection from "./components/skill";
import About from "./components/about";
import ProjectSection from "./components/projects";

export default function Home() {
  return (
    <>
    <About></About>
    <SkillSection></SkillSection>
    <ProjectSection></ProjectSection>
    </>
  );
}
