"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleMapReact from "google-map-react";

const EMAILJS_KEY = process.env.EMAILJS_KEY as string;
const EMAILJS_SERVICEID = process.env.EMAILJS_SERVICEID as string;
const EMAILJS_TEMPLATEID = process.env.EMAILJS_TEMPLATEID as string;
const NEXT_PUBLIC_EMAILJS_RECAPTCHA = process.env
  .NEXT_PUBLIC_EMAILJS_RECAPTCHA as string;
const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export default function ContactSection() {
  const emailRef = useRef<HTMLInputElement>(null!);
  const nameRef = useRef<HTMLInputElement>(null!);
  const msgRef = useRef<HTMLTextAreaElement>(null!);
  const refCaptcha = useRef<ReCAPTCHA>(null!);

  const [state, setState] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => emailjs.init({ publicKey: EMAILJS_KEY }));

  const handleChange = () => {
    let recaptchaValue = refCaptcha.current?.getValue();
    let emailValue = emailRef.current.value;
    let nameValue = nameRef.current.value;
    let msgValue = msgRef.current.value;

    if (
      typeof recaptchaValue != "undefined" &&
      recaptchaValue &&
      emailValue &&
      nameValue &&
      msgValue
    ) {
      setState(false);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const serviceId = EMAILJS_SERVICEID;
    const templateId = EMAILJS_TEMPLATEID;
    const token = await refCaptcha.current?.getValue();
    setShowAlert(false);
    try {
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        userEmail: emailRef.current.value,
        message: msgRef.current.value,
        "g-recaptcha-response": token,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setShowAlert(true);
      refCaptcha.current?.reset();
      setState(false);
    }
  };

  const emptyStr: string = "";
  const MAX_LENGTH = 1500;
  const [textAreaValue, setTextAreaVAlue] = useState(emptyStr);

  // Google maps start
  const defaultProps = {
    center: {
      lat: 10.330256044792451,
      lng: 123.90677247002175,
    },
    zoom: 5,
  };

  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat: defaultProps.center.lat, lng: defaultProps.center.lng },
      map,
      title: "Cebu, PH",
    });
    return marker;
  };
  // Google maps end

  return (
    <div
      id="contactSection"
      className="relative w-full sm:min-h-screen  flex flex-col justify-center items-center  bg-lightGray  "
    >
      <div className=" relative w-full   flex flex-col-reverse sm:flex-row justify-center ">
        <div className=" relative  w-full  sm:w-1/3  grid  pb-5   ">
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap  px-4  sm:px-8 py-5 ">
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
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap px-4 sm:px-8 py-5">
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
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap  px-4 sm:px-8 py-5">
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
                <a href="https://www.linkedin.com/in/charmae">
                  Let&apos;s Connect!
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-row flex-no-wrap px-4 sm:px-8 py-5">
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
            style={{ height: "23vh", width: "90%" }}
            className="px-4 sm:px-8 mb-10"
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            ></GoogleMapReact>
          </div>
        </div>

        <div className=" relative place-items-start sm:w-1/2 w-full  items-start bg-red">
          <div className=" w-full px-5 sm:mx-20 sm:max-w-[750px] sm:items-start sm:justify-start">
            <h2 className="font-bold tracking-wider text-gunmetal text-3xl mt-10 sm:mt-0 ">
              Drop Me a Message
            </h2>
            <div
              id="alert"
              className="flex items-center w-full bg-gray p-2  my-3 space-x-4 rtl:space-x-reverse text-gray-500 bg-cyan-500 divide-x rtl:divide-x-reverse divide-coral 
              shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
              role="alert"
              style={{ visibility: showAlert ? "visible" : "hidden" }}
            >
              <svg
                className="w-5 h-5 ml-2 mb-1  text-white dark:text-gray rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                />
              </svg>
              <div className="ps-4 text-sm font-normal text-white">
                Message sent successfully.
              </div>
            </div>
            <form className="for" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="name"
                  className="w-full border-t-2 border-b-2  border-[#e0e0e0] bg-white py-1  text-base font-medium text-gunmetal outline-none focus:border-coral focus:shadow-md px-2"
                />
              </div>
              <div className="mb-3">
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="name"
                  placeholder="Email Address"
                  className="w-full border-t-2 border-b-2  border-[#e0e0e0] bg-white py-1  text-base font-medium text-gunmetal outline-none focus:border-coral focus:shadow-md px-2"
                />
              </div>

              <div className="mb-3">
                <textarea
                  ref={msgRef}
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  rows={8}
                  maxLength={MAX_LENGTH}
                  onChange={(e) => setTextAreaVAlue(e.target.value)}
                  value={textAreaValue}
                  className="w-full resize-none border-t-2 border-b-2 
                  border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-gunmetal
                  outline-none focus:border-coral focus:shadow-md "
                ></textarea>
                <p className="msg-remaining-text text-gray text-xs">
                  Remaining characters: {MAX_LENGTH - textAreaValue.length}
                </p>
              </div>
              <div>
                <div className="pb-4">
                  <ReCAPTCHA
                    ref={refCaptcha}
                    sitekey={NEXT_PUBLIC_EMAILJS_RECAPTCHA}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="hover:shadow-form rounded-full mb-5 bg-gunmetal py-3 pt-3 px-8 text-base font-semibold text-white outline-none disabled:opacity-25"
                  type="submit"
                  disabled={state}
                >
                  Send
                </button>
                <hr className="w-full my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 dark:opacity-100" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
