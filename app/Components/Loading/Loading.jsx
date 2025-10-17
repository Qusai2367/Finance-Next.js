"use client"
import { useEffect, useState } from "react";

const Loading = ({ delay }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!show) return null;

    return (
        <>
            <div className='flex flex-col items-center justify-center  h-screen relative'>
                <div className=''>
                    <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
                </div>
            </div>
        </>
    );
};

export default Loading;
