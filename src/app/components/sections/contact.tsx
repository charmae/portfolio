"use client";
import Image from "next/image";
import MapboxMap from "../ui/mapbox-map";
import MessageForm from "../ui/message-form";

export default function ContactSection() {
  return (
    <div
      id="contactSection"
      className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center  bg-lightGray  "
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
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase ">
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
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase ">
                Resume
              </h3>
              <div className="font-light text-coral text-sm">Coming Soon</div>
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
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase ">
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
              <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase ">
                Location
              </h3>
              <div className="font-light text-coral text-sm">
                Cebu, Philippines
              </div>
            </div>
          </div>
          <div
            style={{ height: "23vh", width: "100%" }}
            className="px-5 sm:pr-0 sm:pl-10 mb-10  ">
            <MapboxMap />
          </div>
        </div>

        <div className=" relative place-items-start sm:w-1/2 w-full  items-start bg-red">
          <div className=" w-full px-5 sm:mx-20 sm:w-3/4 sm:items-start sm:justify-start">
            <h2 className="font-bold tracking-wider  text-gunmetal text-3xl mt-10 sm:mt-0 ">
              Drop Me a Message
            </h2>
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
}
