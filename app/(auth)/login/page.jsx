"use client";
import AnimationPage from "@/app/Components/AnimationPage/AnimationPage";
import MainInput from "@/app/Components/Ui/MainInput";
import { RouteContext } from "@/app/Context/RouteContext";
import { useContext } from "react";
import { ChevronRight, EyeOff, Lock, Mail } from "feather-icons-react";
import MainButton from "@/app/Components/Ui/MainButton";
import MainHeader from "@/app/Components/MainHeader/MainHeader";
import Banner from "@/app/Components/Banner/Banner";
import { redirect } from "next/navigation";

const Login = () => {
    const { login } = useContext(RouteContext);

    function handleEyePassword() {
        console.log("clicked");
    }

    function HabdleLogin() {
        redirect("/login/pin");
    }

    return (
        <>
            <AnimationPage delay={2000}>
                {/* نستخدم min-h-screen لضمان ملء الشاشة بالكامل */}
                <div className="min-h-screen flex flex-col justify-between">
                    <div>
                        {/* 🔹 العنوان والبنر */}
                        <MainHeader
                            header="Login"
                            rightSide={<ChevronRight size={25} />}
                            backgroundrightSide="bg-gray-2"
                        />

                        <Banner
                            MainTitle="Welcome Again !"
                            text="To continue you must verify your data. Enter your credentials to continue"
                        />

                        {/* 🔹 الحقول */}
                        <MainInput
                            margInnput="mt-10"
                            label="Email"
                            inputType="email"
                            name="email"
                            inputName="email"
                            InputPlaceholder="Enter Your Email"
                            iconMail={<Mail size={23} className="text-color-2" />}
                        />

                        <MainInput
                            margInnput="mt-8"
                            label="Password"
                            InputType="password"
                            name="password"
                            InputName="password"
                            InputPlaceholder="Enter Your Password"
                            Eye={<EyeOff size={23} className="text-color-2" />}
                            OnClickEye={handleEyePassword}
                            iconMail={<Lock size={23} className="text-color-2" />}
                        />

                        <div className="flex justify-between items-center my-5">
                            <div className="text-gray-3 cursor-pointer">
                                Don't Have an Account ?
                            </div>
                            <div className="text-main cursor-pointer">Sign in</div>
                        </div>
                    </div>

                    {/* 🔹 الزر + الشروط في النهاية */}
                    <div className="pb-5 px-4">
                        <p className="text-gray-3 text-center text-xs sm:text-sm mb-3">
                            By continuing, you agree to the{" "}
                            <a href="#" className="text-main">
                                Terms of Service
                            </a>
                            ,{" "}
                            <a href="#" className="text-main">
                                Terms and Conditions
                            </a>
                            , and{" "}
                            <a href="#" className="text-main">
                                Privacy Policy
                            </a>
                        </p>

                        <div onClick={() => HabdleLogin()}>
                            <MainButton title="Login" marginTop="mt-0" />
                        </div>
                    </div>
                </div>
            </AnimationPage>
        </>
    );
};

export default Login;
