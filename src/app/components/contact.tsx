"use client";
import Image from "next/image";


export default function ContactSection() {
  return (
    <div
      id="contactSection"
      className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center  bg-lightGray  "
    >
      <div className="relative self-center text-center w-full sm:pt-0 p-5 sm:p-10">
        <h2 className="font-bold tracking-wider text-gunmetal text-3xl ">
          Contact Me
        </h2>
      </div>

      <div className=" relative place-items-center w-full   flex flex-col sm:flex-row justify-center items-center ">

      <div className=" relative place-items-center w-full  sm:w-1/3  grid  pb-5   ">
    
        <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap justify-center px-4  sm:px-8 py-5 ">
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
        <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap justify-center px-4 sm:px-8 py-5">
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
            <div className="font-light text-coral text-sm">
              Coming Soon
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap justify-center px-4 sm:px-8 py-5">
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
              <a href="#">Cebu, Philippines</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap justify-center px-4 sm:px-8 py-5">
        <div className="sm:w-1/3 xl:w-1/4 px-1">
            <Image
              src="/portfolio/contact/linkedin-icon.png"
              alt="LinkedIn"
              width="40"
              height="40"
              className=" block sm:mx-auto"
            />
          </div>
          <div className="w-2/3 xl:w-3/4 justify-center items-center text-align-center">
            <h3 className="tracking-wide text-gunmetal font-bold text-sm uppercase ">
              LinkedIn
            </h3>
            <div className="font-light text-coral text-sm">
              <a href="https://www.linkedin.com/in/charmae">Let's Connect!</a>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative place-items-start w-2/3  items-start bg-red">
        <div className="mx-auto w-full max-w-[600px]">
          {/* <form action="/" method="POST"> */}
            <div className="mb-3">
             
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md placeholder:-translate-x-4"
              />
            </div>
            <div className="mb-3">
            
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md placeholder:-translate-x-4"
              />
            </div>
            <div className="mb-3">
              
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md placeholder:-translate-x-4"
              />
            </div>
            <div className="mb-3">
             
              <textarea
                name="message"
                id="message"
                placeholder="Type your message"
                rows={5}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md placeholder:-translate-x-4"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-full bg-gray py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
      </div>
    </div>
  );
}