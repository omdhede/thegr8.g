"use client"

import { useSectionInView } from "@/lib/hooks"
import { Separator } from "./ui/separator"
import { webSkills } from "@/lib/skills"

const Skills = () => {
    const { ref } = useSectionInView("Skills", 0.5)

    return (
        <div ref={ref} id="skills" className="bg-black  w-full text-white min-h-screen xl:pl-32 px-5 lg:pl-24 xl:pr-20 lg:pr-8">
            <div className="w-full min-h-screen flex flex-col justify-center items-start">
                <div className="xl:mb-[4rem] mb-2">
                    <h1 className="xl:text-5xl font-semibold">
                        Skills
                    </h1>
                </div>
                <div className="flex flex-row w-full gap-x-10">
                    <div className="flex flex-col w-1/3 bg-[#26262626] p-8 rounded-xl items-start justify-center">
                        <h1 className="font-semibold text-4xl mb-2">
                            Web
                        </h1>
                        <div className="flex flex-col items-start justify-center pl-6 gap-y-2">
                            {webSkills.map((webSkill, _) => {
                                return (
                                    <ul key={_} className="flex flex-row justify-center items-start  ">
                                        <li key={_} className="text-xl flex flex-row items-center justify-center ">
                                            <span className="font-extrabold text-2xl mb-[0.6rem]">.</span> {" "}
                                            <span className="px-2">{webSkill.icon}</span>{" - "}
                                            <span className="px-2">{webSkill.name}</span>
                                        </li>
                                    </ul>
                                )
                            })}

                        </div>
                    </div>
                    <div className=" bg-white text-black flex items-center justify-center">
                        ABC
                    </div>
                    <div className=" bg-white text-black flex items-center justify-center">
                        ABC
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills