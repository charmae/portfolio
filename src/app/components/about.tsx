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
    <div className="w-full sm:min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="relative flex place-items-center  justify-between self-center items-center  flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4  sm:px-0 h-full">
        <div className="w-2/5 text-center sm:text-left pt-20 sm:pt-0 sm:py-4  sm:px-8 md:px-10">
          <Image
            src={aboutMe.avatarIcon}
            alt="photo Logo"
            width={350}
            height={350}
            priority
            className="mx-auto rounded-full"
          />
        </div>
        <div className=" p-5 sm:w-3/5  w-full">
          <div className="w-full flex justify-center items-center sm:justify-start ">
            <Image
              src={aboutMe.nameIcon}
              alt="Name Text Logo"
              width={300}
              height={10}
              priority
            />
          </div>
          <div className="place-items-center pt-2 text-center sm:text-left">
            {" "}
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
          <hr
        className="w-full my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 dark:opacity-100" />

        </div>

      </div>
      <div className="sm:flex sm:flex-row sm:w-full justify-center sm:pt-20 invisible sm:visible">
        <a
          className="px-10 py-2 my-10 text-gray-200 bg-gray-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
          href="#skillset"
        >
          See Skill Set
        </a>
      </div>
    </div>
  );
}
