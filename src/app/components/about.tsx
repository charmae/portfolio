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
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="relative flex place-items-center  justify-between self-center items-center  flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4  sm:px-0 h-full">
        <div className="w-2/5 text-center sm:text-left  sm:py-4  sm:px-8 md:px-10">
          <Image
            src={aboutMe.avatarIcon}
            alt="photo Logo"
            width={500}
            height={500}
            priority
            className="mx-auto  rounded-full"
          />
        </div>
        <div className="place-items-center p-5 w-3/5  ">
          <Image
            className="relative overflow-hidden "
            src={aboutMe.nameIcon}
            alt="Name Text Logo"
            width={300}
            height={10}
            priority
          />
          <div className="place-items-center pt-2 "> {aboutMe.bio}</div>
          <div id="socmed" className="place-items-center mt-4  ">
            <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
              <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
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
          </div>
        </div>
        
      </div>
      <div className="flex flex-row w-full justify-center sm:pt-40 invisible sm:visible">
          <a
            className="px-10 py-2 text-gray-200 bg-gray-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
            href="#skillset"
          >
            See Skillset
          </a>
        </div>
    </div>
  );
}
