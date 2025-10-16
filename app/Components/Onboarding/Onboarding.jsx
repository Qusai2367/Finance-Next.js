"use client";
import { onboardingData } from "@/app/Constants/DataOnbording";
import { RouteContext } from "@/app/Context/RouteContext";
import { useState, useEffect, useContext } from "react";
import Indeicators from "./Indeicators";
import OnbordingBody from "./OnbordingBody";
import MainButton from "../Ui/MainButton";
import Link from "next/link";

const OnboardingComponets = () => {
    const { completeOnboarding } = useContext(RouteContext);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showOnboarding, setShowOnboarding] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem("hasSeenOnboarding");
        setShowOnboarding(!seen);
    }, []);

    // Slide navigation helpers
    const updateSlide = (i) => {
        if (i < 0) i = 0;
        if (i >= onboardingData.length) i = onboardingData.length - 1;
        setCurrentSlide(i);
    };

    // Only render onboarding if showOnboarding is true
    if (!showOnboarding) {
        return null;
    }

    // Render onboarding slides
    return (
        <>
            <div className='flex flex-col absolute bottom-0 m-8 select-none'>
                {/* Body Of Onbording */}
                <OnbordingBody
                    currentSlide={currentSlide}
                    updateSlide={updateSlide}
                />

                {/* Indeicators */}
                <Indeicators
                    currentSlide={currentSlide}
                    onboardingData={onboardingData}
                />

                {/* Buttons */}
                <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                    {currentSlide === onboardingData.length - 1 ? (
                        <>
                            <div className='flex justify-between w-full gap-5'>
                                <MainButton
                                    EventHandler={completeOnboarding}
                                    bgColor='bg-gray-300'
                                    textColor='text-black'
                                    title="let's Start"
                                />

                                <Link href='/register' className="w-full">
                                    <MainButton
                                        EventHandler={completeOnboarding}
                                        title='Sign in'
                                        hover='bg-slate-100'
                                    />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <MainButton
                            EventHandler={() => updateSlide(currentSlide + 1)}
                            title='Continue'
                        />
                    )}
                </div>

                {/* Animations CSS */}
                <style>{`
                .finance-highlight {
                    color: #2969ff;
                    font-weight: bold;
                    background: linear-gradient(90deg,#2969ff 0%,#4CAF50 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
                .onboarding-slide {
                    opacity: 0;
                    transform: scale(0.9) translateY(30px);
                    transition: opacity 0.6s cubic-bezier(.77,0,.18,1), transform 0.6s cubic-bezier(.77,0,.18,1);
                }
                .onboarding-slide.active {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                    animation: popIn 0.7s cubic-bezier(.77,0,.18,1);
                }
                @keyframes popIn {
                    0% { opacity: 0; transform: scale(0.8) translateY(40px); }
                    60% { opacity: 1; transform: scale(1.05) translateY(-5px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                .onboarding-indicator {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #ccc;
                    transition: all 0.4s cubic-bezier(.77,0,.18,1);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                .onboarding-indicator.active {
                    width: 30px;
                    border-radius: 3px;
                    // background: #4CAF50;
                             background: #2969ff;
                    animation: indicatorPop 0.5s cubic-bezier(.77,0,.18,1);
                }
                @keyframes indicatorPop {
                    0% { width: 10px; background: #ccc; }
                    60% { width: 22px; background: #2969ff; }
                    100% { width: 18px; background: #2969ff; }
                }
            `}</style>
            </div>
        </>
    );
};

export default OnboardingComponets;
// background: #4CAF50;
