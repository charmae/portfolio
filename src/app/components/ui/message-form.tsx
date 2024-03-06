"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const EMAILJS_KEY = process.env.EMAILJS_KEY as string;
const EMAILJS_SERVICEID = process.env.EMAILJS_SERVICEID as string;
const EMAILJS_TEMPLATEID = process.env.EMAILJS_TEMPLATEID as string;
const NEXT_PUBLIC_EMAILJS_RECAPTCHA = process.env
  .NEXT_PUBLIC_EMAILJS_RECAPTCHA as string;

export default function MessageForm() {
  const emailRef = useRef<HTMLInputElement>(null!);
  const nameRef = useRef<HTMLInputElement>(null!);
  const msgRef = useRef<HTMLTextAreaElement>(null!);
  const refCaptcha = useRef<ReCAPTCHA>(null!);

  const emptyStr: string = "";
  const MAX_LENGTH = 1500;
  const [textAreaValue, setTextAreaVAlue] = useState(emptyStr);

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
      recaptchaValue && emailValue &&
      nameValue && msgValue
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



  return (
    <section>
      <div
        id="alert"
        className="flex items-center w-full bg-gray p-2  my-3 space-x-4 rtl:space-x-reverse text-gray-500 bg-cyan-500 divide-x rtl:divide-x-reverse divide-coral 
              shadow   space-x  dark:bg-emerald-400 dark:divide-white dark:text-coral"
        role="alert"
         style={{ visibility: showAlert ? "visible" : "hidden" }}
      >
        <svg
          className="w-5 h-5 ml-2 mb-1  text-white dark:text-gray rotate-45 dark:text-blue-navy"
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
        <div className="ps-4 text-sm font-normal text-white dark:text-gunmetal">
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
          <p className="msg-remaining-text text-gray text-xs dark:text-white">
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
            className="hover:shadow-form rounded-full mb-5 bg-gunmetal py-3 pt-3 px-8 text-base font-semibold text-white outline-none disabled:opacity-25 dark:bg-coral"
            type="submit"
            disabled={state}
          >
            Send
          </button>
          <hr className="w-full my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 dark:opacity-100" />
        </div>
      </form>
    </section>
  );
}
