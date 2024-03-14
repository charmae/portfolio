"use client";

import {
  SocialMediaType,
  ABOUT_ME_DETAILS as aboutMe,
  socialMediaList,
} from "@/constants/constant";
import Image from "next/image";
import Parser from "html-react-parser";

export default function About() {
  return (
    <section>
      <div className="w-full min-h-screen flex flex-col justify-center dark:bg-gunmetal dark:text-white ">
        <div className="relative flex flex-col sm:flex-row   
        place-items-center  justify-between self-center items-center  
        w-full  sm:w-3/4  md:w-3/4 lg:w-5/6 xl:w-5/6 2xl:w-3/6  
        px-4 sm:px-0 md:px-0 h-full">
          <div className="w-2/5 text-center  pt-10 py-8 sm:pt-0 md:pt-0   sm:px-8 ">
            <Image
              src={aboutMe.avatarIcon}
              alt="photo Logo"
              width={0}
              height={0}
              priority
              className="w-full sm:w-full md:w-full lg:w-full xl:w-full  mx-auto rounded-full"
            />
          </div>
          <div className=" p-2 w-full">
            <div className="w-full flex flex-row justify-center items-center sm:items-start sm:justify-start  ">
              {Parser(aboutMe.nameSvg)}
            </div>
            <div className="place-items-center text-center  w-full
            2xl:text-lg sm:text-left 
            dark:text-black px-2">
              {aboutMe.bio}
            </div>
            <div className="text-center  ">
              <ul className="mt-3 flex justify-center items-center sm:justify-start">
                {socialMediaList.map((socialMedia: SocialMediaType) => (
                  <li key={socialMedia.label}>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      aria-label={socialMedia.label}
                      href={socialMedia.href}
                      target="_blank"
                    >
                      {Parser(socialMedia.svgPath)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="w-full my-12 md:my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 dark:opacity-100" />
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:w-full justify-center 
        sm:pt-20 md:pt-20 2xl:pt-40 lg:pt-20 invisible sm:visible">
          <a
            className="relative 
            px-5 py-2 
            hover:border-t-coral hover:border-b-coral hover:shadow  
            border-t-2  border-t-blue-navy  border-b-blue-navy border-b-2 
            text-lg  dark:border-white "
            href="#skillset"
          >
            Learn More about My Skill Set
          </a>
        </div>
      </div>
    </section>
  );
}
