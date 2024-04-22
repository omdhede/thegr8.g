"use client"

import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
    const { ref } = useSectionInView("Contact")

    return(
        <div ref={ref} id="contact" className="bg-black w-full text-white min-h-screen xl:pl-32 px-5 lg:pl-24 xl:pr-28 lg:pr-18">
            <div className="w-full min-h-screen flex flex-col items-start justify-center">
                Contact
            </div>
        </div>
    )
}

export default Contact;