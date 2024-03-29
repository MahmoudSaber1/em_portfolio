import React from "react";

const Hero = () => {
    return (
        <section className=" py-10 md:min-h-screen flex flex-col justify-center gap-[16rem] md:gap-[26rem]">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                <div className="relative p-5 border-4 border-primary rounded-full">
                    <h1 className="text-sm sm:text-xl md:text-2xl pl-5 font-bold text-left leading-tight tracking-wider">
                        Hey There, <br /> I&apos;m Ibrahem
                        <span className="bg-primary px-2 text-sm sm:text-xl py-1 rounded-full ml-2">Designer</span>
                    </h1>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-center leading-tight">
                    i design <br /> beautifully <br /> simple
                </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="flex items-center justify-center gap-2">
                    <h1 className="text-primary text-4xl sm:text-6xl md:text-9xl font-bold leading-tight tracking-wider">9</h1>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-left leading-tight tracking-wider">
                        YEARS <br /> EXPERIENCE
                    </h1>
                </div>

                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center leading-tight">+201019678921</h2>
            </div>
        </section>
    );
};

export default Hero;
