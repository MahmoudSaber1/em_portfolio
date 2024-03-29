import React from "react";
import Header from "./Header";
import Image from "next/image";

const Tools = () => {
    const myTools = ["/photoshop.svg", "/illustrator.svg", "/xd.svg", "/figma.svg"];
    return (
        <section className="py-[2rem]">
            <Header title={"Tools"} />

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
                {myTools.map((tool) => {
                    return (
                        <Image
                            key={tool}
                            src={tool}
                            alt={tool}
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Tools;
