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
        className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center py-10   "
      >
        <div className="relative self-center text-center w-full sm:w-2/3 xl:w-1/2  sm:px-0 sm:pt-0">
          <h2 className="font-bold tracking-wider text-gunmetal text-3xl mb-4">
            Projects
          </h2>
        </div>

        <div className=" relative place-items-center w-full sm:w-3/4 grid py-5  items-center  grid-cols-1 gap-0">
          {projects.map((project: ProjectType) => (
            <div className="w-full flex  p-2 sm:p-1 " key={project.id}>
              <div className="relative w-1/2 m-10  ">
                <h3 className="tracking-wide  font-bold sm:text-xl text-lg   mb-0">
                  {project.name}
                </h3>
                <div className="relative font-light text-gray-500 sm:text-sm mt-2">
                  <p>{project.description}</p>
                </div>
                <div className="relative font-light text-gray-500 sm:text-sm mt-2 ">
                  <p>
                    <a
                      href={project.repoUrl}
                      className=" text-gray hover:text-red-500"
                    >
                      Code Repository
                    </a>{" "}
                    |{" "}
                    <a
                      href={project.url}
                      className=" text-gray hover:text-red-500"
                    >
                      Demo
                    </a>
                  </p>
                </div>
                <div className="relative font-light text-gray-500 sm:text-sm mt-5">
                  {project.techStack.map((tech: TechStackType) => (
                    <p key={tech.name} className="mb-1">
                      <a
                        href={tech.url}
                        className="text-orange-500 underline  underline-offset-4 "
                      >
                        {tech.name}
                      </a>
                      &nbsp;
                    </p>
                  ))}
                </div>

                <hr className="w-full my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 dark:opacity-100" />
              </div>
              <div className="w-1/2  ">
                {project.images.map((projectImg: ImageType) => (
                  <Image
                    key={projectImg.id as string}
                    src={projectImg.imageURL}
                    alt={project.name}
                    width="500"
                    height="50"
                    className=" block mx-auto border-2   border-t-gray  border-b-gray "
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}