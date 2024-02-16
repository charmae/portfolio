"use client";
import Image from "next/image";

import { CertType, CERT_LIST as certList } from "@/constants/constant";

export default function CertificateSection() {
  return (
    <div id="certificates" className="w-full flex flex-col justify-center items-center pt-5" >
      <div className="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-1 sm:px-0">
        <h2 className="font-bold tracking-wider text-gray-800 text-2xl mb-4 divide-y ">
          Certifications
        </h2>
      </div>

      <div className=" place-items-center w-3/4  justify-between grid sm:grid-cols-5 sm:gap-5 grid-cols-2 gap-2 ">
        {certList.map((cert: CertType) => (
          <div
            className="w-full sm:w-full flex-row hover:shadow-lg p-5 place-items-center "
            key={cert.name}
          >
            <a href={cert.href} target="_blank">
              <div className="w-full">
                <Image
                  src={cert.icon}
                  alt={cert.name}
                  width={115}
                  height={24}
                  className="block mx-auto"
                  priority
                />
              </div>

              <div className="w-full place-items-center pt-2 ">
                <p className="font-light text-gray-500 text-xs text-center">
                  {cert.name}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
