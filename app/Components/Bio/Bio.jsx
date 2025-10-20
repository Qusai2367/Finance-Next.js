import Image from "next/image";
import Profile from "../../assets/peeps-avatar.png";

const Bio = ({ marginTop, widthProfile, heightProfile,TheName }) => {
    return (
        <>
            <div className={`flex justify-center items-center flex-col ${marginTop}`}>
                <div className=''>
                    <Image
                        src={Profile}
                        alt='Profile'
                        className={`rounded-full ${widthProfile} ${heightProfile}`}
                    />
                </div>

                <div>
                    <h1 className="mt-5 text-xl font-black">{TheName}</h1>
                </div>
            </div>
        </>
    );
};

export default Bio;
