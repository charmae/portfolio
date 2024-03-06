"use client";
import Image from "next/image";
import MapboxMap from "../ui/mapbox-map";
import MessageForm from "../ui/message-form";

export default function ContactSection() {
  return (
    <div
      id="contactSection"
      className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center  bg-lightGray  dark:text-white dark:bg-gunmetal sm:pt-20"
    >
      <div className=" relative w-full   flex flex-col-reverse sm:flex-row justify-center ">
        <div className=" relative  w-full  sm:w-1/3  grid  pb-5   ">
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap  px-4  sm:px-8 py-3 ">
            <div className="sm:w-1/3 xl:w-1/4 px-1">
              <Image
                src="/portfolio/contact/email-icon.png"
                alt="Email"
                width="50"
                height="50"
                className=" block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 justify-center items-center text-align-center">
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase dark:text-white">
                Email
              </h3>
              <div className="font-light text-coral text-sm">
                <a href="mailto:charmae@gcharmae.com">charmae@gcharmae.com</a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap px-4 sm:px-8 py-3">
            <div className="sm:w-1/3 xl:w-1/4 px-1">
              <Image
                src="/portfolio/contact/resume-icon.png"
                alt="Resume"
                width="50"
                height="50"
                className=" block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 justify-center items-center text-align-center">
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase dark:text-white">
                CV/Resume
              </h3>
              <div className="font-light text-coral text-sm">Upon Request </div>
              <div className="font-light text-coral text-xs">Send me a message -&gt;</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap  px-4 sm:px-8 py-3">
            <div className="sm:w-1/3 xl:w-1/4 px-2">
              <Image
                src="/portfolio/contact/linkedin-icon.png"
                alt="LinkedIn"
                width="42"
                height="42"
                className=" block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 justify-center items-center text-align-center">
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
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap px-4 sm:px-8 py-3">
            <div className="sm:w-1/3 xl:w-1/4 px-1">
              <Image
                src="/portfolio/contact/location-icon.png"
                alt="Location"
                width="50"
                height="50"
                className=" block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 justify-center items-center text-align-center">
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
            className="px-5 sm:pr-0 sm:pl-10 mb-10 row-span-2   ">
            <MapboxMap />
          </div>
        </div>

        <div className=" relative place-items-start sm:w-1/2 w-full  items-start bg-red">
          <div className=" w-full px-5 sm:mx-20 sm:w-3/4 sm:items-start sm:justify-start">
            <h2 className="font-bold tracking-wider  text-gunmetal text-3xl mt-10 sm:mt-0 dark:text-white ">
              Drop Me a Message
            </h2>
            <p className="text-gray text-xs mt-1 dark:text-coral pb-5">Drop me a message anytime; <p className="underline inline">my inbox is always open!</p></p>
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
}
