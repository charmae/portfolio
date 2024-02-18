import Image from "next/image";
import Link from "next/link";
import SkillSection from "./components/skill";
import About from "./components/about";
import ProjectSection from "./components/projects";
import ContactSection from "./components/contact";
import dotenv from 'dotenv'; 


export default function Home() {
  dotenv.config();
  return (
    <>
    <About/>
    <SkillSection/>
    <ProjectSection/>
    <ContactSection/>
    </>
  );
}
