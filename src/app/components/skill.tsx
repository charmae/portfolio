"use client";
import Image from "next/image";

import {
  SkillItem as SkillItemType,
  SKILL_ITEMS as skills,
} from "@/constants/constant";
import CertificateSection from "./certificates";

export default function SkillSection() {
  return (
    <div
      id="skillset"
      className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center py-10  bg-slate-50 "
    >
      <div className="relative self-center text-center w-full sm:w-2/3 xl:w-1/2  sm:px-0 sm:pt-0">
        <h2 className="font-bold tracking-wider text-gray-800 text-3xl mb-4">
          Skill Set
        </h2>
      </div>

      <div className=" relative place-items-center w-full sm:w-3/4 grid py-5  items-center sm:grid-cols-3 sm:gap-3 grid-cols-2 gap-0">
        {skills.map((skill: SkillItemType) => (
          <div
            className="w-full flex   hover:shadow-lg p-2  "
            key={skill.name}
          >
            <div className="w-1/3 px-2">
              <Image
                src={skill.icon}
                alt={skill.name}
                width="50"
                height="50"
                className=" block mx-auto "
              />
            </div>
            <div className="relative w-2/3 xl:w-3/4 ">
              <h3 className="tracking-wide  font-bold sm:text-xl text-lg   mb-0">
                {skill.name}
              </h3>
              <div className="relative font-light text-gray-500 sm:text-sm">
                <p>{skill.proficiency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CertificateSection/>
    </div>
  );
}
