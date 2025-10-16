"use client"
import { RouteContext } from "@/app/Context/RouteContext";
import { redirect } from "next/navigation";
import {useContext} from "react";

const Login = () => {
    const { finishedOnboarding, isLoggedIn, loading, splash , setIsLoggedIn} =
        useContext(RouteContext);

        function HabdleLogin() {
            setIsLoggedIn(!isLoggedIn)
            // redirect("/")
        }
    return <div className="" onClick={() => HabdleLogin()}>Login</div>;
};

export default Login;
