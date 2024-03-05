"use client";
import Image from "next/image";

import { SKILL_PROF_LEVELS, SkillItemType, SKILL_ITEMS as skills } from "@/constants/constant";
import CertificateSection from "./certificates";
import {SkillTooltip}  from "../ui/skill-tooltip";


export default function SkillSection() {
  return (
    <div
      id="skillset"
      className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center py-10 bg-lightGray  "
    >
      <div className="relative self-center text-center w-full sm:w-2/3 xl:w-1/2  sm:px-0 sm:pt-0">
        <h2 className="font-bold tracking-wider text-gunmetal text-3xl mb-4">
          Skills
        </h2>
      </div>

      <div className=" relative place-items-center w-full sm:w-3/4 grid py-5  items-center sm:grid-cols-3 sm:gap-3 grid-cols-2 gap-0">
        {skills.map((skill: SkillItemType) => (
          <div className="w-full flex   p-2 sm:p-1 dark:text-gunmetal " key={skill.name}>
            <div className="w-1/3 px-2 sm:px-0">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={0}
                height={0}
                className="w-2/5 block mx-auto "
              />
            </div>
            <div className="relative w-2/3 xl:w-3/4 ">
              <a href={skill.skillUrl} target="_blank">
                <h3 className="tracking-wide inline-block font-bold sm:text-xl text-lg  mb-0 hover:text-coral">
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
              <div>{skill.proficiency}</div>
            </div>
          </div>
        ))}
      </div>
      <CertificateSection />
      <div className="sm:flex sm:flex-row sm:w-full justify-center sm:pt-20 invisible sm:visible">
        <a
          className="px-10 py-2 my-10 text-white bg-gray rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
          href="#projectSection" >
          Take a Tour of My Work
        </a>
      </div>
    </div>
  );
}
