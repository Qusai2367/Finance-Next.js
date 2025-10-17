import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import plug from "./assets/Wplug.svg";
import finance from "./assets/logo_w300.png";
import MainButton from "./Components/Ui/MainButton";
export const metadata = {
    title: "404 - Page Not Found",
};

export default function GlobalNotFound() {
    return (
        <html lang='en'>
            <body className='text-black  flex flex-col items-center justify-between notfound h-screen'>
                <div className='flex items-center justify-center mt-20'>
                    <Image
                        src={finance}
                        alt='splash photo'
                        className='w-1/2 transition-opacity duration-1000 opacity-100 animate-fadein'
                        priority
                    />
                </div>

                <div className='flex flex-col items-center justify-center h-100'>
                    <h1
                        className='text-[80px] font-black text-white '
                        style={{
                            fontSize: "7rem",
                            marginBottom: "1rem",
                        }}>
                        Oops!
                    </h1>

                    <h3 style={{ color: "white" }}>404 - Page Not Found</h3>
                    <p style={{ marginBlock: "1.5rem", color: "white" }}>
                        The page you requested doesn’t exist.
                    </p>
                </div>

                <Link
                    href='/'
                    className='mb-30 px-2 py-5 cursor-pointer border border-white text-white w-5/6 rounded-3xl text-center'
                    style={{
                        color: "white",
                    }}>
                    Back Home
                </Link>
            </body>
        </html>
    );
}
