"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { RouteContext } from "@/app/Context/RouteContext";
import SplashComponents from "../Splash/SplashComponets";

export default function ProtectedRoute({ children }) {
    const { finishedOnboarding, isLoggedIn, loading, splash } =
        useContext(RouteContext);
    const router = useRouter();

    // ✅ بعد انتهاء splash والتحميل، نتحقق من الحالات
    useEffect(() => {
        if (loading || splash) return;

        if (!finishedOnboarding) {
            router.replace("/onboarding");
        } else if (!isLoggedIn) {
            router.replace("/login");
        } else {
            router.replace("/");
        }
    }, [loading, splash, finishedOnboarding, isLoggedIn, router]);

    // ✅ عرض splash أولاً
    if (splash) return <SplashComponents />;

    return children;
}
