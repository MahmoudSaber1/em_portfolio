import React from "react";

const Header = ({ title }: { title: string }) => {
    return (
        <div className="pb-10 md:pb-16">
            <div className="w-full h-1 mb-5 bg-primary relative before:conetnt-[''] before:absolute before:size-4 before:bg-primary before:rounded-full before:-top-[0.34rem] before:-left-2 after:conetnt-[''] after:absolute after:size-4 after:bg-primary after:rounded-full after:-top-[0.34rem] after:-right-2"></div>
            <h1 className={`text-2xl md:text-5xl text-primary font-bold py-1 px-3 md:px-5 ${title ? "border-2" : ""} rounded-[100%] w-fit`}>
                {title}
            </h1>
        </div>
    );
};

export default Header;
