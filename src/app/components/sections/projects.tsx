"use client";
import Image from "next/image";
import { ImageType } from "@/constants/constant";

import {
  ProjectType,
  TechStackType,
  PROJECT_ITEMS as projects,
} from "@/constants/constant";

export default function ProjectSection() {
  return (
    <>
      <div
        id="projectSection"
        className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center py-10  bg-white dark:bg-gunmetal dark:text-coral "
      >
        <div className="relative self-center text-center w-full sm:w-full md:w-full lg:w-2/3 xl:w-1/2  ">
          <h2 className="font-bold tracking-wider text-gunmetal text-3xl ">
            Projects
          </h2>
        </div>

        <div className=" relative place-items-center w-full sm:w-full md:w-full lg:w-3/4 py-5 items-center dark:text-white ">
          {projects.map((project: ProjectType) => (
            <div
              className="w-full flex flex-col-reverse sm:flex-row  p-2 sm:p-1 "
              key={project.id}
            >
              <div className="relative sm:w-full md:w-full lg:w-1/2 sm:m-10 m-5 w-full   ">
                <h3 className="tracking-wide  font-bold sm:text-xl text-lg   mb-0">
                  {project.name}
                </h3>
                <div className="relative font-light text-gray-500 sm:text-sm mt-2 ">
                  <p>{project.description}</p>
                </div>
                <div className="relative font-light text-gray-500 sm:text-sm mt-2  ">
                  <p>
                    <a
                      href={project.repoUrl}
                      className=" text-gray hover:text-red-500 dark:text-cyan-600"
                    >
                      Code Repository
                    </a>{" "}
                    |{" "}
                    <a
                      href={project.url} target="_blank"
                      className=" text-gray hover:text-red-500 dark:text-cyan-600"
                    >
                      Demo
                    </a>
                  </p>
                </div>
                <div className="relative font-light text-gray-500 sm:text-sm mt-5 grid flex-cols grid-cols-2 ">
                  {project.techStack.map((tech: TechStackType) => (
                    <div key={tech.name} >
                    <p className="mb-1">
                      <a
                        href={tech.url}
                        className="text-orange-500 underline  underline-offset-4 "
                      >
                        {tech.name}
                      </a>
                    </p>
                    </div>
                  ))}
                </div>

                <hr className="w-full my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 dark:opacity-100" />
              </div>
              <div className="relative sm:w-full md:w-full lg:w-1/2 w-full  ">
                {project.images.map((projectImg: ImageType) => (
                  <Image
                    key={projectImg.id as string}
                    src={projectImg.imageURL}
                    alt={project.name}
                    width={0}
                    height={0}
                    className="w-full sm:w-3/4 block mx-auto border-2   border-t-gray  border-b-gray justify-items-center items-center justify-center"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className=" text-gray font-light text-xs text-center dark:text-white ">Get ready for an exciting influx of new projects coming soon!</p>
        <div className="sm:flex sm:flex-row sm:w-full justify-center  invisible sm:visible">
        <a
          className="px-10 py-2 my-10  relative 
          hover:border-t-coral hover:border-b-coral hover:shadow  
          border-t-2  border-t-blue-navy  border-b-blue-navy border-b-2 
          text-lg  dark:border-white "
          href="#contactSection" >
          Contact Me Here
        </a>
      </div>
      </div>
    </>
  );
}
