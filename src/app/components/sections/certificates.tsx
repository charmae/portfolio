"use client";
import Image from "next/image";

import { CertType, CERT_LIST as certList } from "@/constants/constant";

export default function CertificateSection() {
  return (
    <section>
    <div  className="relative flex flex-col justify-center items-center dark:text-gunmetal ">
      <div className="relative text-center w-full px-1 pt-5 sm:px-0">
        <h2 className="relative w-full font-bold  text-gray-800 text-2xl mb-4  ">
          Certifications
        </h2>
      </div>

      <div className=" relative place-items-center w-full sm:w-3/4 grid items-center sm:grid-cols-5 sm:gap-5 grid-cols-2 g sm:gap-5">
        {certList.map((cert: CertType) => (
          <div
            className="relative w-full sm:w-full flex-row hover:shadow-lg p-5 place-items-center "
            key={cert.name}
          >
            <a href={cert.href} target="_blank">
              <div className="w-full">
                <Image
                  src={cert.icon}
                  alt={cert.name}
                  width={0}
                  height={0}
                  className="w-1/2 h-auto block mx-auto"
                  priority
                />
              </div>

              <div className="relative w-full place-items-center pt-2 ">
                <p className="font-light text-gunmetal text-xs text-center">
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
