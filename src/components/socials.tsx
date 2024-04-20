import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { socials } from '@/lib/socials';
import { Avatar, AvatarImage } from './ui/avatar';
import Link from 'next/link';

export default function Socials() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <div>
            <Carousel
                plugins={[plugin.current]}
                className="w-72 flex"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {socials.map((social, index) => (
                        <CarouselItem key={index}>
                            <div >
                                <Card className='bg-transparent border-none bg-opacity-0'>
                                    <CardContent className="flex h-[14rem] min-h-4 items-center justify-center p-6">
                                        <HoverCard>
                                            <HoverCardTrigger>
                                                <span className='text-white underline underline-offset-2 '>
                                                    {social.name}
                                                </span>
                                            </HoverCardTrigger>
                                            <HoverCardContent className='flex bg-slate-600 border-none justify-center mt-4'>
                                                <div className='flex justify-between'>
                                                    <Avatar className=' bg-white'>
                                                        <AvatarImage src={social.avatarLink} />
                                                    </Avatar>
                                                    <div>
                                                        <Link href={social.profileLink} className=''>
                                                            View Profile
                                                        </Link>
                                                    </div>
                                                </div>

                                            </HoverCardContent>
                                        </HoverCard>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
        </div>
    );
}