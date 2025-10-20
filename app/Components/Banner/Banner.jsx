import React from "react";

const Banner = ({MainTitle, text}) => {
    return (
        <>
            <div className='mt-10'>
                <div>
                    <h1 className='text-3xl font-black'>{MainTitle}</h1>
                </div>

                <div className="mt-3">
                    <p>
                        { text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Banner;
