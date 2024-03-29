import React from "react";
import Header from "./Header";
import Image from "next/image";

const Help = () => {
    const helps = ["Design", "Photography", "Advertising", "Branding", "Social Media"];
    return (
        <section className="py-[2rem] relative">
            <Header title={""} />

            <div className="bg-background border-[0.1px] border-primary/35 p-20 mx-10 rounded-t-lg rounded-bl-lg rounded-br-[14rem]">
                <h1 className="text-xl md:text-3xl font-bold text-center pb-10">What Do I Help?</h1>
                <div className="flex items-start justify-start flex-col gap-10">
                    {helps.map((help) => {
                        return (
                            <div
                                className="flex items-center justify-start gap-5"
                                key={help}>
                                <span className="w-5 h-5 bg-white rounded-full"></span>
                                <h1 className="text-xl font-bold">{help}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute top-20 right-0 size-16 animate-spin-slow">
                <Image
                    src={"/star.svg"}
                    fill
                    alt="star"
                    className="object-contain"
                />
            </div>
            <div className="absolute bottom-0 right-20 size-16 animate-spin-slow">
                <Image
                    src={"/star.svg"}
                    fill
                    alt="star"
                    className="object-contain"
                />
            </div>
            <div className="absolute -bottom-16 left-20 size-16 animate-bounce">
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
