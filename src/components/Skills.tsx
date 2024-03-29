import React from "react";
import Header from "./Header";

const Skills = () => {
    const mySkills = [
        { name: "Branding", level: "90%" },
        { name: "UI/UX", level: "70%" },
        { name: "Social media", level: "80%" },
        { name: "Advertisements", level: "90%" },
    ];
    return (
        <section className="py-[2rem]">
            <Header title={"Skills"} />

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 h-full">
                {mySkills.map((skill) => {
                    return (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center gap-5 h-full">
                            <div className="h-[14rem] w-[3rem] md:h-[20rem] md:w-[5rem] rounded-t-full bg-white relative">
                                <div
                                    style={{
                                        height: `${skill.level}`,
                                    }}
                                    className="absolute bottom-0 w-full bg-primary"></div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold">{skill.name}</h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
