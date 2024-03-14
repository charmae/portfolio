"use client";
import Image from "next/image";

import { CertType, CERT_LIST as certList } from "@/constants/constant";

export default function CertificateSection() {
  return (
    <section>
    <div  className="relative flex flex-col justify-center items-center dark:text-white dark:bg-gunmetal ">
      <div className="relative text-center w-full px-1 sm:pt-0 sm:px-0">
        <h2 className="relative w-full font-bold  text-gray-800 text-2xl my-4 sm:my-2  dark:text-white ">
          Certifications
        </h2>
      </div>

      <div className=" relative place-items-center w-full sm:w-3/4 grid items-center 
      sm:grid-cols-3 sm:gap-5
      md:grid-cols-3  md:gap-5
      lg:grid-cols-5  lg:gap-5
      grid-cols-2 g 
       dark:text-white">
        {certList.map((cert: CertType) => (
          <div
            className="relative w-full flex-row hover:shadow-lg p-5 place-items-center  "
            key={cert.name}
          >
            <a href={cert.href} target="_blank">
              <div className="w-full">
                <Image
                  src={cert.icon}
                  alt={cert.name}
                  width={0}
                  height={0}
                  className="w-2/5 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-1/3 h-auto block mx-auto"
                  priority
                />
              </div>

              <div className="relative w-full place-items-center pt-2 ">
                <p className="font-light text-gunmetal text-xs 2xl:text-sm text-center dark:text-white">
                  {cert.name}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
      
    </div>
    </section>
  );
}
