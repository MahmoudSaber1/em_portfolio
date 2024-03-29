import Image from "next/image";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Help from "@/components/Help";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="container mx-auto">
                <div className="size-full absolute z-0 left-0 -top-[54rem] md:-top-[55rem] lg:-top-[20rem]">
                    <Image
                        src={"/my_photo.svg"}
                        fill
                        alt="my_photo"
                        className="object-contain filter opacity-20"
                    />
                </div>
                <div className="relative z-10 px-10 md:px-20">
                    <Navbar />
                    <Hero />
                    <Skills />
                    <Tools />
                    <Help />
                </div>
                <h1 className="text-4xl md:text-8xl font-bold text-center py-20">Thank You</h1>
            </div>
        </main>
    );
}
