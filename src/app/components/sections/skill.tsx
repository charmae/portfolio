"use client";
import Image from "next/image";

import {
  SKILL_PROF_LEVELS,
  SkillItemType,
  SKILL_ITEMS as skills,
} from "@/constants/constant";
import CertificateSection from "./certificates";
import { SkillTooltip } from "../ui/skill-tooltip";

export default function SkillSection() {
  return (
    <div
      id="skillset"
      className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center py-5  bg-lightGray dark:bg-gunmetal  "
    >
      <div className="relative self-center text-center w-full sm:w-2/3 xl:w-1/2  sm:px-0 sm:pt-0">
        <h2 className="font-bold tracking-wider text-gunmetal text-3xl mb-4 sm:mb-15 dark:text-white">
          Skills
        </h2>
      </div>

      <div
        className=" relative place-items-center w-full sm:w-3/4  px-5 grid items-center gap-0 grid-cols-2  
      sm:grid-cols-3 sm:gap-3 
      md:grid-cols-4 md:gap-3 
      lg:grid-cols-4 lg:gap-3
      xl:grid-cols-5 xl:gap-3
      2xl:grid-cols-5 2xl:gap-5 "
      >
        {skills.map((skill: SkillItemType) => (
          <div className="w-full flex   dark:text-white my-2" key={skill.name}>
            <div className="w-1/4  mx-2 sm:mx-3  sm:px-0">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={0}
                height={0}
                className="w-full 2xl:w-2/4  block "
              />
            </div>
            <div className="relative w-3/4  ">
              <a href={skill.skillUrl} target="_blank">
                <h3 className="tracking-wide inline-block font-bold text-md sm:text-sm md:text-sm lg:text-md  2xl:text-xl  mb-0 hover:text-coral">
                  {skill.name}
                </h3>
              </a>
              {/* <div className="relative font-light text-gray-500 sm:text-sm tooltip_element" >
               
                <SkillTooltip message={
                  <section >
                  <div className="font-semibold font-sm text-coral">{skill.proficiency} Level</div> 
                  {(SKILL_PROF_LEVELS.find(i => i.level == skill.proficiency)?.knowledge || '')}<br/>
                  {(SKILL_PROF_LEVELS.find(i => i.level == skill.proficiency)?.experience || '')}<br/>
                  {(SKILL_PROF_LEVELS.find(i => i.level == skill.proficiency)?.performance || '')}<br/>
                  {(SKILL_PROF_LEVELS.find(i => i.level == skill.proficiency)?.problem_solving || '')}<br/>
                  {(SKILL_PROF_LEVELS.find(i => i.level == skill.proficiency)?.awareness || '')}<br/>
                  </section>
                  } position="bottom" label={skill.proficiency}/>

              </div> */}
              <div className="w-full text-md sm:text-sm md:text-sm lg:text-md  2xl:text-xl  dark:text-white ">
                {skill.proficiency}
              </div>
            </div>
          </div>
        ))}
      </div>
      <CertificateSection />
      <div className="sm:flex sm:flex-row sm:w-full justify-center sm:py-20 lg:py-10 invisible sm:visible">
        <a
          className="relative 
          px-5 py-2 
          hover:border-t-coral hover:border-b-coral hover:shadow  
          border-t-2  border-t-blue-navy  border-b-blue-navy border-b-2 
          text-lg  dark:border-white "
          href="#projectSection"
        >
          Take a Tour of My Work
        </a>
      </div>
    </div>
  );
}
