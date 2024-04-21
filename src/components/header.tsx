"use client"

import React, { useEffect, useRef, useState } from "react";
import CLOUDS from "vanta/src/vanta.clouds";
import * as THREE from "three";
import { Reveal } from "@/framer-motion/Reveal";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Header() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    const { ref } = useSectionInView("Home", 0.5);



    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                })
            );
        }
    }, [vantaEffect]);
    return (
        <div className="w-full scroll-smooth snap-y snap-mandatory" ref={ref} id="home">
            <div
                className='bg-[#0B0C10] min-h-screen w-full flex flex-col justify-center items-start'
                ref={vantaRef}
            >
                <div className="backdrop-blur-[2px] lg:backdrop-blur-[1px] w-full px-5 lg:pl-24 xl:pl-32 flex min-h-screen">
                    <div className="flex flex-col items-start justify-center sm:ml-4 sm:gap-y-2">
                        {/* <div className="absolute top-0 flex flex-row">
                            <Nav />
                        </div> */}
                        <div className="flex absolute top-1/4 sm:top-32 ">
                            <Reveal side="up">
                                <h1 className="text-[1.4rem] sm:text-5xl font-semibold flex flex-row items-center justify-center">
                                    Welcome to the <span className="opacity-60 ml-2">
                                        <TypewriterComponent
                                            options={{
                                                strings: ['infinity sky.', 'अनन्तस्य आरम्भः'],
                                                autoStart: true,
                                                loop: true
                                            }}
                                        />
                                    </span>
                                </h1>
                            </Reveal>
                        </div>

                        <div className="sm:mt-2 flex items-center justify-center backdrop-blur-xl">
                            <Reveal side="up">
                                <span className="text-lg sm:text-2xl font-semibold text-[#46cbff] backdrop-blur-xl">
                                    Hello, I&apos;m
                                </span>
                            </Reveal>
                        </div>
                        <div className="sm:mt-2 flex items-center justify-center backdrop-blur-xl">
                            <Reveal side="up">
                                <span className="text-5xl sm:text-8xl font-semibold text-[#f1fbff] backdrop-blur-xl">
                                    Om Dhede.
                                </span>
                            </Reveal>
                        </div>
                        <div className="mt-1 sm:mt-2 flex items-center justify-center">
                            <Reveal side="up">
                                <span className="text-2xl sm:text-4xl font-semibold opacity-85">
                                    I build things for the web.
                                </span>
                            </Reveal>
                        </div>
                        <div className="flex flex-row gap-x-4 sm:gap-x-10 mt-4">
                            <div>
                                <Reveal side="up">
                                    <Link href='#contact'>
                                        <Button variant="ghost" className="bg-slate-500 rounded-xl sm:p-6 bg-opacity-20 border-[0.2px] border-slate-500 border-opacity-55">
                                            <span className="sm:font-semibold sm:text-lg">Contact Me</span>
                                            <span className="text-xl font-semibold ml-2"><ArrowRight size={20} /></span>
                                        </Button>
                                    </Link>
                                </Reveal>
                            </div>
                            <div>
                                <Reveal side="up">
                                    <Link href="/cv.pdf" target="_blank">
                                        <Button
                                            variant="ghost"
                                            className="bg-slate-500 rounded-xl sm:p-6 bg-opacity-20 border-[0.2px] border-slate-500 border-opacity-55 "
                                        >
                                            <span className="sm:font-semibold sm:text-lg">Resume</span>
                                            <span className="ml-2"><Download size={20} /></span>
                                        </Button>
                                    </Link>
                                </Reveal>
                            </div>
                        </div>
                        <div className="absolute bottom-1/4 sm:bottom-20 flex items-center justify-center">
                            <Reveal side="up">
                                <span className="sm:text-3xl text-xl font-semibold opacity-60 ">
                                    Design, Develop, Deploy: All in One.
                                </span>
                            </Reveal>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
