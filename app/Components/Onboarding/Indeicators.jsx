import React from "react";

const Indeicators = ({currentSlide, onboardingData}) => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 10,
                    justifyContent: "center",
                }}>
                {onboardingData.map((_, i) => (
                    <div
                        key={i}
                        className={`mb-5 ${
                            currentSlide === i
                                ? "onboarding-indicator active"
                                : "onboarding-indicator"
                        }`}
                    />
                ))}
            </div>
        </>
    );
};

export default Indeicators;
