"use client"

import { useSectionInView } from "@/lib/hooks"
import { webSkills } from "@/lib/skills"
import Image from "next/image"



const Skills = () => {
    const { ref } = useSectionInView("Skills", 0.5)

    return (
        <div ref={ref} id="skills" className="bg-black  w-full text-white min-h-screen pb-10 xl:pl-32 px-5 lg:pl-24 lg:pb-20  xl:pr-28 lg:pr-24 sm:pl-12 sm:pr-8 ">
            <div className="w-full min-h-screen flex flex-col justify-center items-start">
                <div className="xl:mb-[4rem] lg:mb-6 sm:mt-24 sm:mb-10 mt-16 mb-8">
                    <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-3xl font-semibold">
                        Skills
                    </h1>
                </div>
                <div className="flex flex-col gap-y-4 xl:flex xl:flex-row lg:grid lg:grid-flow-col lg:grid-rows-2  lg:w-full sm:grid sm:grid-flow-col sm:grid-rows-2 sm:gap-x-10 sm:gap-y-0 sm:mb-20 items-start justify-center lg:gap-x-10 lg:gap-y-0 ">

                    {/* WEB SKILLS */}
                    <div className="flex flex-col w-full xl:w-1/4 sm:w-fit bg-[#4b4b4b3c] p-8 rounded-xl items-start justify-center">
                        <h1 className="text-xl font-semibold lg:text-2xl xl:text-4xl mb-2 sm:text-xl">
                            Web
                        </h1>
                        <div className="flex flex-col items-start justify-center lg:pl-6 gap-y-2">
                            {webSkills.map((webSkill, _) => {
                                return (
                                    <ul key={_} className="flex flex-row justify-center items-start  ">
                                        <li key={_} className="lg:text-xl flex flex-row items-center justify-center ">
                                            <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                            <span className="px-2">{webSkill.icon}</span>{" - "}
                                            <span className="px-2">{webSkill.name}</span>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>


                    {/* MOBILE SKILLS */}
                    <div className="xl:w-1/4 lg:w-full w-full sm:w-fit flex sm:flex-col lg:flex-col xl:flex-col flex-col gap-y-4 ">
                        <div className="flex flex-col xl:w-full sm:w-fit bg-[#4b4b4b3c] p-8 rounded-xl items-start justify-center">
                            <h1 className="font-semibold text-xl sm:text-xl lg:text-2xl xl:text-4xl mb-2">
                                Mobile
                            </h1>

                            {/* Couldn't implement the map logic because of svg files */}
                            <div className="flex flex-col items-start justify-center lg:pl-6 lg:gap-y-2 ">
                                <ul className="flex flex-col justify-center items-start gap-y-2">
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/flutter.svg" alt="Flutter icon" width={40} height={40} />
                                        </span>{" - "}
                                        <span className="px-2">Flutter</span>
                                    </li>
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/react-native.svg" alt="React Native icon" width={40} height={40} />
                                        </span>{" - "}
                                        <span className="px-2">React Native</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Devops */}
                        <div className="flex flex-col w-full bg-[#4b4b4b3c] p-8 rounded-xl items-start justify-center">
                            <h1 className="font-semibold text-xl sm:text-xl lg:text-2xl xl:text-4xl mb-2">
                                DevOps/Tools
                            </h1>

                            {/* Couldn't implement the map logic because of svg files */}
                            <div className="flex flex-col items-start justify-center lg:pl-6 gap-y-2">
                                <ul className="flex flex-col justify-center items-start  gap-y-2">
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/docker.svg" alt="Docker icon" width={40} height={40} />
                                        </span>{" - "}
                                        <span className="px-2">Docker</span>
                                    </li>
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/jenkins.svg" alt="Jenkins icon" width={40} height={40} />
                                        </span>{" - "}
                                        <span className="px-2">Jenkins</span>
                                    </li>
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/aws.svg" alt="AWS icon" width={40} height={40} className="bg-white p-1 rounded-lg" />
                                        </span>{" - "}
                                        <span className="px-2">AWS {"(EC2)"}</span>
                                    </li>
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/ubuntu.svg" alt="Ubuntu icon" width={40} height={40} className="bg-white p-1 rounded-lg" />
                                        </span>{" - "}
                                        <span className="px-2">Ubuntu Server</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* BACKEND SKILLS */}
                    <div className="flex xl:w-1/4 lg:w-full w-full flex-col sm:w-fit bg-[#4b4b4b3c] p-8 rounded-xl items-start justify-center">
                        <h1 className="font-semibold text-xl sm:text-xl lg:text-2xl xl:text-4xl mb-2 ">
                            Backend
                        </h1>

                        {/* Couldn't implement the map logic because of svg files */}
                        <div className="flex flex-col items-start justify-center lg:pl-6 gap-y-2">
                            <ul className="flex flex-col justify-center items-start  gap-y-2 ">
                                <li className="lg:text-xl flex flex-row items-center justify-center ">
                                    <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                    <span className="px-2">
                                        <Image src="/icons/nodejs.svg" alt="Nodejs icon" width={35} height={35} />
                                    </span>{" - "}
                                    <span className="px-2">NodeJS</span>
                                </li>
                                <li className="lg:text-xl flex flex-row items-center justify-center ">
                                    <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                    <span className="px-2">
                                        <Image src="/icons/express.svg" alt="Express icon" width={35} height={35} className="rounded-lg" />
                                    </span>{" - "}
                                    <span className="px-2">Express</span>
                                </li>
                                <li className="lg:text-xl flex flex-row items-center justify-center ">
                                    <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                    <span className="px-2">
                                        <Image src="/icons/mongoose.svg" alt="Mongoose icon" width={35} height={35} />
                                    </span>{" - "}
                                    <span className="px-2">Mongoose</span>
                                </li>
                                <li className="lg:text-xl flex flex-row items-center justify-center ">
                                    <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                    <span className="px-2">
                                        <Image src="/icons/firebase.svg" alt="Firebase icon" width={35} height={35} />
                                    </span>{" - "}
                                    <span className="px-2">Firebase</span>
                                </li>
                                <li className="lg:text-xl flex flex-row items-center justify-center">
                                    <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                    <span className="px-2">
                                        <Image src="/icons/trpc.svg" alt="tRPC icon" width={40} height={40} className="bg-white rounded-lg p-1 bg-opacity-5 aspect-square" />
                                    </span>{" - "}
                                    <span className="px-2">tRPC</span>
                                </li>
                                <li className="lg:text-xl flex flex-row items-center justify-center ">
                                    <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                    <span className="px-2">
                                        <Image src="/icons/graphql.svg" alt="GraphQL icon" width={35} height={35} />
                                    </span>{" - "}
                                    <span className="px-2">GraphQL</span>
                                </li>
                                <li className="lg:text-xl flex flex-row items-center justify-center ">
                                    <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                    <span className="px-2">
                                        <Image src="/icons/prisma.svg" alt="Prism icon" width={35} height={35} />
                                    </span>{" - "}
                                    <span className="px-2">Prisma {"(ORM)"}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="xl:w-1/4 lg:w-full w-full sm:w-fit flex flex-col gap-y-4">
                        {/* LAUNGAUGES */}
                        <div className="flex flex-col w-full bg-[#4b4b4b3c] p-8 rounded-xl items-start justify-center">
                            <h1 className="font-semibold lg:text-2xl xl:text-4xl mb-2 sm:text-xl">
                                Languages
                            </h1>
                            <div className="flex flex-col items-start justify-center lg:pl-6 gap-y-2">
                                <ul className="flex flex-col justify-center items-start  gap-y-2 ">
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/java.svg" alt="Flutter icon" width={35} height={35} />
                                        </span>{" - "}
                                        <span className="px-2">Java</span>
                                    </li>
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/python.svg" alt="Flutter icon" width={35} height={35} />
                                        </span>{" - "}
                                        <span className="px-2">Python</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col w-full bg-[#4b4b4b3c] p-8 rounded-xl items-start justify-center">
                            <h1 className="font-semibold lg:text-2xl xl:text-4xl mb-2 sm:text-xl">
                                Databases
                            </h1>
                            <div className="flex flex-col items-start justify-center lg:pl-6 gap-y-2">
                                <ul className="flex flex-col justify-center items-start  gap-y-2 ">
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/mysql.svg" alt="Flutter icon" width={35} height={35} />
                                        </span>{" - "}
                                        <span className="px-2">MySQL {"*"}</span>
                                    </li>
                                    <li className="lg:text-xl flex flex-row items-center justify-center ">
                                        <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                        <span className="px-2">
                                            <Image src="/icons/mongoose.svg" alt="Flutter icon" width={35} height={35} />
                                        </span>{" - "}
                                        <span className="px-2">MongoDB</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills