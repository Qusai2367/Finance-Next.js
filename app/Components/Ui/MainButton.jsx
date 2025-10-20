import React from "react";

const MainButton = ({
    title,
    EventHandler,
    bgColor = "bg-main",
    textColor = "text-white",
    width = "w-full",
    hover = "bg-slate-100",
    marginTop = "mt-10"  
}) => {
    return (
        <>
            <button
                className={`px-6 py-6 ${width} ${marginTop} ${textColor} ${bgColor} font-black rounded-2xl cursor-pointer hover:${hover} transition`}
                onClick={EventHandler}>
                {title}
            </button>
        </>
    );
};

export default MainButton;
