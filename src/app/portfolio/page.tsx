import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
    return (
        <main className="min-h-screen bg-black text-white relative">
            <div className="w-full h-full absolute z-0 -top-[50rem] md:-top-[7rem] lg:-top-[8rem]">
                <Image
                    src={"/my_photo.svg"}
                    fill
                    alt="my_photo"
                    className="object-contain filter opacity-20"
                />
            </div>
            <div className="relative z-10 px-10 md:px-20">
                <Navbar />
                <div className="h-screen"></div>
            </div>
            <h1 className="text-8xl font-bold text-center py-20">Thank You</h1>
        </main>
    );
};

export default Portfolio;
