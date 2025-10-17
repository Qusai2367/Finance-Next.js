"use client";
import AnimationPage from "./Components/AnimationPage/AnimationPage";
import { useContext } from "react";
import { RouteContext } from "./Context/RouteContext";

export default function Home() {
    const { logout } = useContext(RouteContext);

    return (
        <AnimationPage delay={2000}>
            <h1
                onClick={logout}
                className='text-4xl font-bold cursor-pointer hover:text-blue-500 transition-colors'>
                Home
            </h1>

            <p className='mt-4 text-gray-500 text-lg'>
                👋 Welcome back to your dashboard
            </p>
        </AnimationPage>
    );
}
