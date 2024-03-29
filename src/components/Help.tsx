import React from "react";
import Header from "./Header";
import Image from "next/image";

const Help = () => {
    const helps = ["", "", "", "", ""];
    return (
        <section className="py-[2rem] relative">
            <Header title={""} />

            <div className="bg-background border-[0.1px] border-primary/35 p-5 sm:p-8 md:p-20 mx-5 md:mx-10 rounded-t-lg rounded-bl-lg rounded-br-[8rem] md:rounded-br-[14rem]">
                <h1 className="text-sm sm:text-lg md:text-3xl font-bold text-center pb-10">What Do I Help?</h1>
                <div className="flex items-start justify-start flex-col gap-5 md:gap-10">
                    {helps.map((help) => {
                        return (
                            <div
                                className="flex items-center justify-start gap-5"
                                key={help}>
                                <span className="size-3 md:size-5 bg-white rounded-full"></span>
                                <h1 className="text-xl font-bold">{help}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute top-16 md:top-20 right-0 size-10 md:size-16 animate-spin-slow">
                <Image
                    src={"/star.svg"}
                    fill
                    alt="star"
                    className="object-contain"
                />
            </div>
            <div className="absolute bottom-0 right-10 md:right-20 size-10 md:size-16 animate-spin-slow">
                <Image
                    src={"/star.svg"}
                    fill
                    alt="star"
                    className="object-contain"
                />
            </div>
            <div className="absolute -bottom-8 md:-bottom-16 left-20 size-10 md:size-16 animate-bounce">
                <Image
                    src={"/star.svg"}
                    fill
                    alt="star"
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default Help;
