import React from "react";

const MainInput = ({
    inputRef,
    InputType,
    InputName,
    placeHolder,
    inputValue,
    onChange,
    iconMail,
    margInnput,
    label,
    Button
}) => {
    return (
        <>
            <div className={`${margInnput}`}>
                <div className='relative '>
                    <label className='absolute top-4 left-25 px-2 z-10'>
                        {label}
                    </label>
                    <div className='relative'>
                        <input
                            ref={inputRef}
                            type={InputType}
                            name={InputName}
                            placeholder={placeHolder}
                            value={inputValue}
                            onChange={onChange}
                            className="inputbg w-full pl-27 pr-40 pt-10 pb-5 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:outline-none transition-colors "
                          
                            required
                        />
                        <span className='absolute left-7 top-1/2 -translate-y-1/2 t'>
                            {iconMail}
                        </span>
                        {/* Vertical line separator for lock icon */}
                        <div className='absolute left-19 h-12 top-5 bottom-3 w-px bg-color-2'></div>
                      
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainInput;
