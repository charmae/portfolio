"use client";
import Image from "next/image";
import MapboxMap from "../ui/mapbox-map";
import MessageForm from "../ui/message-form";
import { useRef, useEffect, useState } from "react";

export default function ContactSection() {
  const msgformRef = useRef<HTMLInputElement>(null!);

  const focusNameInput = () => {
    msgformRef.current.focus();
  };

  return (
    <div
      id="contactSection"
      className="relative w-full min-h-screen  flex flex-col justify-center items-center  bg-lightGray  dark:text-white dark:bg-gunmetal sm:pt-10 md:pt-5 lg:pt-0"
    >
      <div className=" relative w-full   flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row  justify-center ">
        <div className=" relative  w-full  sm:w-full md:w-full lg:w-2/6 grid   px-3  ">
          <div className="w-full flex flex-row flex-no-wrap py-3 ">
            <div className=" px-1 ">
              <Image
                src="/portfolio/contact/email-icon.png"
                alt="Email"
                width="50"
                height="50"
                className=" block  mx-auto"
              />
            </div>
            <div className=" justify-center items-center text-align-center">
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase dark:text-white">
                Email
              </h3>
              <div className="font-light text-coral text-sm">
                <a href="mailto:charmae@gcharmae.com">charmae@gcharmae.com</a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row flex-no-wrap  py-3">
            <div className=" px-1">
              <Image
                src="/portfolio/contact/resume-icon.png"
                alt="Resume"
                width="50"
                height="50"
                className=" block mx-auto"
              />
            </div>
            <div className="  justify-center items-center text-align-center">
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase dark:text-white">
                CV/Resume
              </h3>
              <div className="font-light text-coral text-sm">Upon Request </div>
              <div className="font-light text-gunmetal text-xs  ">
                <a
                  onClick={() => {
                    focusNameInput();
                  }}

                  className="hover:text-coral cursor-pointer"
                >
                  Drop me a message <div className="inline sm:visible invisible">-&gt; </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full  flex flex-row flex-no-wrap  py-3">
            <div className=" px-2">
              <Image
                src="/portfolio/contact/linkedin-icon.png"
                alt="LinkedIn"
                width="42"
                height="42"
                className=" block mx-auto"
              />
            </div>
            <div className="justify-center items-center text-align-center">
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase dark:text-white">
                LinkedIn
              </h3>
              <div className="font-light text-coral text-sm">
                <a href="https://www.linkedin.com/in/charmae">
                  Let&apos;s Connect!
                </a>
              </div>
            </div>
          </div>
          <div className="w-full  flex flex-row flex-no-wrap  py-3">
            <div className=" px-1">
              <Image
                src="/portfolio/contact/location-icon.png"
                alt="Location"
                width="50"
                height="50"
                className=" block mx-auto"
              />
            </div>
            <div className="justify-center items-center text-align-center">
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase dark:text-white">
                Location
              </h3>
              <div className="font-light text-coral text-sm">
                Cebu, Philippines
              </div>
            </div>
          </div>
          <div
            style={{ height: "23vh", width: "100%" }}
            className=" w-full sm:pr-0  mb-5    "
          >
            <MapboxMap />
          </div>
        </div>

        <div className=" relative place-items-start sm:w-full md:w-full lg:w-3/6 w-full  items-start bg-red">
          <div className=" w-full px-10 sm:w-full md:w-full sm:items-start sm:justify-start">
            <h2 className="font-bold tracking-wider  text-gunmetal text-3xl mt-10 sm:mt-0 dark:text-white ">
              Drop Me a Message
            </h2>
            <p className="text-gray text-xs dark:text-coral pb-5">
              Drop me a message anytime;
              <p className="underline inline">my inbox is always open!</p>
            </p>
            <MessageForm reference={msgformRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
