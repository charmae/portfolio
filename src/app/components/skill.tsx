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
      className="w-full min-h-screen flex flex-col justify-center items-center py-10  bg-slate-50 "
    >
      <div className="self-center text-center w-full sm:w-2/3 xl:w-1/2  sm:px-0 sm:pt-0">
        <h2 className="font-bold tracking-wider text-gray-800 text-3xl mb-4">
          Skillset
        </h2>
      </div>

      <div className=" place-items-center w-3/4 justify-between grid sm:grid-cols-3 sm:gap-3 grid-cols-2 gap-2">
        {skills.map((skill: SkillItemType) => (
          <div
            className="w-full h-full flex  hover:shadow-lg  p-5"
            key={skill.name}
          >
            <div className="w-1/4 xl:w-1/4 h-full">
              <Image
                src={skill.icon}
                alt={skill.name}
                width="50"
                height="50"
                className=" block mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-3">
              <h3 className="tracking-wide  font-bold text-xl  mb-0">
                {skill.name}
              </h3>
              <div className="font-light text-gray-500 text-lg">
                <p>{skill.proficiency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CertificateSection></CertificateSection>
    </div>
  );
}
