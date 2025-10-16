"use client";
import { createContext, useState, useEffect } from "react";

export const RouteContext = createContext();

export default function RouteProvider({ children }) {
    const [finishedOnboarding, setFinishedOnboarding] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const onboarded =
                localStorage.getItem("finishedOnboarding") === "true";
            const logged = localStorage.getItem("isLoggedIn") === "true";

            setFinishedOnboarding(onboarded);
            setIsLoggedIn(logged);

            setLoading(false);
            setSplash(false);
        });
    }, []);

    const completeOnboarding = () => {
        localStorage.setItem("finishedOnboarding", "true");
        setFinishedOnboarding(true);
    };

    const login = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false);
    };

    return (
        <RouteContext.Provider
            value={{
                finishedOnboarding,
                isLoggedIn,
                setIsLoggedIn,
                loading,
                splash,
                completeOnboarding,
                login,
                logout,
            }}>
            {children}
        </RouteContext.Provider>
    );
}
