"use client";
import { onboardingData } from "@/app/Constants/DataOnbording";
import { FindWord } from "@/app/utilities/FindWord";
import ColoredTitle from "./ColorWord";
import { useRef } from "react";

const OnbordingBody = ({ currentSlide, updateSlide }) => {
    const startX = useRef(0);

    //touch handlers
    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        handleSwipe(startX.current - endX);
    };

    // Mouse handlers
    const handleMouseDown = (e) => {
        startX.current = e.clientX;
    };

    const handleSwipe = (diff) => {
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentSlide < onboardingData.length - 1) {
                updateSlide(currentSlide + 1);
            } else if (diff < 0 && currentSlide > 0) {
                updateSlide(currentSlide - 1);
            }
        }
    };

    const handleMouseUp = (e) => {
        const endX = e.clientX;
        handleSwipe(startX.current - endX);
    };

    return (
        <>
            <div
                className='w-full relative overflow-hidden'
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}>
                {onboardingData.map((bord, i) => {
                    
                    return (
                        <div
                            key={i}
                            className={
                                currentSlide === i
                                    ? "onboarding-slide active"
                                    : "onboarding-slide"
                            }
                            style={{
                                display: currentSlide === i ? "flex" : "none",
                                flexDirection: "column",
                                padding: 15,
                                boxSizing: "border-box",
                            }}>
                       
                                <ColoredTitle text={bord.title} highlight='finance.' />
                         
                            <p className='t-gray-3 mb-5'>{bord.text}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default OnbordingBody;
