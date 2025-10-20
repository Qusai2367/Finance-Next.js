import {
    ArrowDownRight,
    ArrowRight,
    ArrowRightCircle,
    ChevronRight,
} from "feather-icons-react";
import React from "react";

const MainHeader = ({ header, rightSide, backgroundrightSide ,leftSide ,backgroundLeftSide }) => {
    return (
        <>
            <div className='flex  items-center justify-between py-10'>
                <div>
                    <button
                        className={`${backgroundLeftSide} p-2.5 rounded-full cursor-pointer`}>
                        {leftSide}
                    </button>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>{header}</h1>
                </div>
                <div>
                    <button
                        className={`${backgroundrightSide} p-2.5 rounded-full  cursor-pointer`}>
                        {rightSide}
                    </button>
                </div>
            </div>
        </>
    );
};

export default MainHeader;
