import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center   ">
      <div
        id="about"
        className="w-full min-h-screen flex flex-col justify-center items-center "
      >
        <div className="relative flex place-items-center  justify-between self-center items-center  flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0 h-full">
          <div className="w-2/5 text-center sm:text-left  py-12 sm:px-8 md:px-10">
            <Image
              className="relative rounded-full"
              src="/portfolio/photo.jpg"
              alt="photo Logo"
              width={500}
              height={29}
              priority
            />
          </div>
          <div className="place-items-center p-5 w-3/5 ">
            <Image
              className="relative overflow-hidden "
              src="/portfolio/charmae-name.png"
              alt="Name Text Logo"
              width={300}
              height={10}
              priority
            />
            <div className="place-items-center pt-2 ">
              Greetings! I&apos;m Charmae, a Software Engineering Specialist
              with over ten years in the IT industry. I specialize in Java
              Enterprise Backend & Integration, along with Front-End
              Development, leveraging my proficiency in Java EE, Spring
              Framework, Spring Boot, Angular, JUnit, MuleSoft, MUnit,
              SonarQube, and GIT.
            </div>
            <div id="socmed" className="place-items-center mt-4  ">
              <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      aria-label="Twitter"
                      href="https://twitter.com/gcharmae"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      aria-label="Instagram"
                      href="https://www.instagram.com/gcharmae/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M16.5 7.5l0 .01"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      aria-label="Discord"
                      href="https://discord.com/users/1015044854096613426"
                      target="_blank"
                    >
                      <svg
                        width="20"
                        height="19"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      aria-label="Linkedin"
                      href="https://www.linkedin.com/in/charmae"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      aria-label="Github"
                      href="https://github.com/charmae/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center sm:pt-40 ">
          <a
            className="px-10 py-2 text-gray-200 bg-gray-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
            href="#skillset"
          >
            See Skillset
          </a>
        </div>
      </div>

      <div
        id="skillset"
        className="w-full min-h-screen flex flex-col justify-center items-center py-5"
      >
        <div className="self-center text-center w-full sm:w-2/3 xl:w-1/2  sm:px-0">
          <h2 className="font-bold tracking-wider text-gray-800 text-3xl mb-4">
            Skillset
          </h2>
        </div>

        <div className="relative place-items-center w-3/4  justify-between grid sm:grid-cols-3 sm:gap-3">
          <div className="w-full sm:w-full flex  hover:shadow-lg p-5  ">
            <div className="w-1/4 xl:w-1/4">
              <img
                src="/portfolio/skillset/java-skill.png"
                alt="Java"
                className="w-10 block sm:mx-auto  place-items-start "
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-5">
              <h3 className="tracking-wide  font-bold text-2xl  mb-0 w-4/5">
                Java
              </h3>

              <div className="font-light text-gray-500 text-lg">
                <p>Advanced</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full flex  hover:shadow-lg  p-5   ">
            <div className="w-1/4 xl:w-1/4">
              <img
                src="/portfolio/skillset/spring-skill.svg"
                alt="Spring"
                className="w-16 block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-5 ">
              <h3 className="tracking-wide  font-bold text-2xl  mb-0">
                Spring
              </h3>
              <div className="font-light text-gray-500 text-lg">
                <p>Advanced</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full flex  hover:shadow-lg  p-5  ">
            <div className="w-1/4 xl:w-1/4">
              <img
                src="/portfolio/skillset/mulesoft-skill.png"
                alt="MuleSoft"
                className="w-20 block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-5">
              <h3 className="tracking-wide  font-bold text-2xl  mb-0">
                MuleSoft
              </h3>
              <div className="font-light text-gray-500 text-lg">
                <p>Advanced</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full flex  hover:shadow-lg   p-5 ">
            <div className="w-1/4 xl:w-1/4">
              <img
                src="/portfolio/skillset/javascript-skill.svg"
                alt="JavaScript"
                className="w-16 block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-5">
              <h3 className="tracking-wide  font-bold text-2xl  mb-0">
                JavaScript
              </h3>
              <div className="font-light text-gray-500 text-lg">
                <p>Advanced</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full flex  hover:shadow-lg   p-5 ">
            <div className="w-1/4 xl:w-1/4">
              <img
                src="/portfolio/skillset/typescript-skill.png"
                alt="TypeScript"
                className="w-16 block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-5">
              <h3 className="tracking-wide  font-bold text-2xl  mb-0">
                TypeScript
              </h3>
              <div className="font-light text-gray-500 text-lg">
                <p>Intermediate</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full flex  hover:shadow-lg   p-5 ">
            <div className="w-1/4 xl:w-1/4">
              <img
                src="/portfolio/skillset/hl7-skill.png"
                alt="HL7"
                className="w-16 block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-5">
              <h3 className="tracking-wide  font-bold text-2xl  mb-0">
                HL7 V2 & FHIR
              </h3>
              <div className="font-light text-gray-500 text-lg">
                <p>Intermediate</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full flex  hover:shadow-lg   p-5 ">
            <div className="w-1/4 xl:w-1/4">
              <img
                src="/portfolio/skillset/angular-skill.svg"
                alt="Angular"
                className="w-16 block sm:mx-auto"
              />
            </div>
            <div className="w-2/3 xl:w-3/4 px-5">
              <h3 className="tracking-wide  font-bold text-2xl  mb-0">
                Angular
              </h3>
              <div className="font-light text-gray-500 text-lg">
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-1 sm:px-0">
          <h2 className="font-bold tracking-wider text-gray-800 text-2xl mb-4 divide-y ">
            Certifications
          </h2>
        </div>

        <div className="relative place-items-center w-3/4  justify-between grid sm:grid-cols-5 sm:gap-5">
          <div className="w-full place-items-center flex-row hover:shadow-lg p-5">
            <a
              href="https://www.credly.com/badges/ef43cbcc-f032-43d0-b4fb-05809475ad41/public_url"
              target="_blank"
            >
              <div className="w-full place-items-center ">
                <img
                  src="/portfolio/certificate/aws-practitioner-cert.png"
                  alt="AWS Certified Cloud Practitioner"
                  className="w-24 xs:w-10 block sm:mx-auto  text-align-center "
                />
              </div>

              <div className="w-full place-items-center pt-2 ">
                <p className="font-light text-gray-500 text-xs text-center">
                  {" "}
                  AWS Certified Cloud Practitioner
                </p>
              </div>
            </a>
          </div>

          <div className="w-full sm:w-full flex-row hover:shadow-lg p-5">
            <a
              href="https://www.credly.com/badges/0d6ff17f-53d7-4c87-a4f5-12d79b83e888/public_url"
              target="_blank"
            >
              <div className="w-full">
                <img
                  src="/portfolio/certificate/java-cert.png"
                  alt="Oracle Certified Java 8 Programmer"
                  className="w-24 block sm:mx-auto"
                />
              </div>

              <div className="w-full place-items-center pt-2 ">
                <p className="font-light text-gray-500 text-xs text-center">
                  {" "}
                  Oracle Certified Java 8 Programmer
                </p>
              </div>
            </a>
          </div>

          <div className="w-full sm:w-full flex-row hover:shadow-lg p-5">
            <a
              href="https://drive.google.com/file/d/1MxQ2bD3T2hPIQfVIqF3SEs4QTXMZFyaz/view?usp=sharing"
              target="_blank"
            >
              <div className="w-full">
                <img
                  src="/portfolio/certificate/sf-ai-cert.png"
                  alt="Salesforce Certified AI Associate"
                  className="w-24 block sm:mx-auto"
                />
              </div>

              <div className="w-full place-items-center pt-2 ">
                <p className="font-light text-gray-500 text-xs text-center">
                  Salesforce Certified AI Associate
                </p>
              </div>
            </a>
          </div>

          <div className="w-full sm:w-full flex-row hover:shadow-lg p-5">
            <a
              href="https://drive.google.com/file/d/1e0xeHjphW5CwBaprNoiEerFRxxZYljzH/view?usp=sharing"
              target="_blank"
            >
              <div className="w-full">
                <img
                  src="/portfolio/certificate/mule-ai-cert.png"
                  alt="MuleSoft Certified Associate Integration"
                  className="w-24 block sm:mx-auto"
                />
              </div>

              <div className="w-full place-items-center pt-2 ">
                <p className="font-light text-gray-500 text-xs text-center">
                  {" "}
                  MuleSoft Certified Associate Integration
                </p>
              </div>
            </a>
          </div>

          <div className="w-full sm:w-full flex-row hover:shadow-lg p-5">
            <a
              href="https://drive.google.com/file/d/1WuW6uZgwAxSLgXe-cZPRq8tRdBgDsKtn/view?usp=sharing"
              target="_blank"
            >
              <div className="w-full">
                <img
                  src="/portfolio/certificate/mule-dev-cert.png"
                  alt="MuleSoft Certified Developer"
                  className="w-24 block sm:mx-auto"
                />
              </div>

              <div className="w-full place-items-center pt-2 ">
                <p className="font-light text-gray-500 text-xs text-center">
                  {" "}
                  MuleSoft Certified Developer
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
