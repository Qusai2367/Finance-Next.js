"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../Loading/Loading";

export default function AnimationPage({ children, delay = 2000 }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Loading delay={delay} />
                </motion.div>
            ) : (
                <motion.main
                    key="page"
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className=""
                >
                    {children}
                </motion.main>
            )}
        </AnimatePresence>
    );
}
