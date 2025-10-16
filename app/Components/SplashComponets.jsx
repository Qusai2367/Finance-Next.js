
import Image from "next/image";
import splash from "../assets/logo_w300.png";

const SplashComponets = () => {

    return (
        <div className='flex flex-col items-center justify-center bg-[#2969ff] h-screen relative'>
            {/* Fade-in splash logo */}
            <Image
                src={splash}
                alt='splash photo'
                className='w-1/2 transition-opacity duration-1000 opacity-100 animate-fadein'
                priority
                style={{ animation: "fadein 1.5s" }}
            />
            {/* Loading spinner */}
            <div className='absolute bottom-20 left-1/2 -translate-x-1/2'>
                <div className='w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
            </div>
      
            {/* Fade-in keyframes */}
            <style jsx>{`
                @keyframes fadein {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default SplashComponets;
