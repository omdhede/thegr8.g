"use client"

import { Reveal } from "@/framer-motion/Reveal";
import TypewriterComponent from "typewriter-effect";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { aboutMe } from "@/lib/about-me";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export const About = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, loop: true })
    );
    const { ref } = useSectionInView("About", 0.5);

    return (
        <div className="w-full text-white min-h-screen " id="about" ref={ref}>
            <div className="min-h-screen w-full flex flex-col sm:flex-row justify-center items-center">
                <div className="backdrop-blur-[2px] mt-[4rem] sm:mt-0 sm:ml-4 gap-y-8 sm:gap-y-0 lg:backdrop-blur-[1px] w-full px-5 lg:pl-24 lg:pr-24 xl:pl-32 flex min-h-screen flex-col sm:flex-row justify-center items-center gap-x-12">
                    <div className="sm:w-1/2 flex flex-col items-center justify-center">
                        <Reveal side="left">
                            <div className="flex flex-col gap-y-4 text-justify">
                                <div>
                                    <h1 className="text-3xl sm:text-5xl font-semibold">
                                        Who am I?
                                    </h1>
                                    <div className="flex flex-row text-xl sm:text-2xl">
                                        {"=>"}
                                        <span className="ml-2">
                                            <TypewriterComponent
                                                options={{
                                                    strings: ['A Fullstack Developer.', 'A Tech Enthusiast.', 'A Learner.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    deleteSpeed: 44
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-sm sm:text-lg">
                                    <p >
                                        Hello I am Om Dhede, a{" "}
                                        <span className="underline underline-offset-2">Fullstack Javascript and Typescript Developer</span>{" "}
                                        from India. In Love with building beautiful Web Applications with{" "}
                                        <span className="font-semibold">Next.js</span>{", "}
                                        <span className="font-semibold">React</span>{" and "}
                                        <span className="font-semibold">Typescript</span>{"."}
                                    </p>
                                </div>
                                <div className="text-sm sm:text-lg">
                                    <p>
                                        I&apos;m currently freelancing and also I&apos;m a member in{" "}
                                        <span className="underline underline-offset-2">Cohort 2.0 by Harkirat Singh</span>{". "}
                                        Alongside this, I am pursuing my Bachelor&apos;s in{" "}
                                        <span className="underline underline-offset-2">Artificial Intelligence and Data Science</span>{", "}
                                        expected to graduate in 2025, in Pune.
                                    </p>
                                </div>
                                <div className="text-sm sm:text-lg">
                                    <p>
                                        I&apos;m also actively contributing into{" "}
                                        <span className="text-sm sm:text-lg sm:uppercase font-semibold">open source projects</span>{"."}
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                    <div className=" sm:w-1/2">
                        <Reveal side="up" >
                            <Carousel className="sm:w-[80%] " plugins={[plugin.current]}>
                                <CarouselContent>
                                    {aboutMe.map((imports) => (
                                        <CarouselItem key={imports.index} className=" flex flex-row items-center justify-center">
                                            <Card className="w-fit flex flex-shrink-0 justify-center items-center">
                                                <CardContent className=" flex items-center justify-center">
                                                    <div className="mt-6">
                                                        <Image
                                                            src={imports.image}
                                                            alt="profile"
                                                            width={350}
                                                            height={350}
                                                            key={imports.index}
                                                            className="rounded-sm"
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </Reveal>

                    </div>
                </div>
            </div>
        </div>
    )
};