import "../../style/colors.css";
const MainInput = ({
    inputType,
    inputName,
    inputValue,
    onChange,
    iconMail,
    margInnput,
    InputPlaceholder,
    label,
    Eye,
    OnClickEye,
}) => {
    return (
        <>
            <div className={`${margInnput}`}>
                <div className='relative w-full'>
                    {/* Label داخل الـ input */}
                    <label
                        className='
        absolute 
        text-gray-400
        top-3 sm:top-4 
        left-12 sm:left-16
        px-1
        text-sm sm:text-base
        z-10
        pointer-events-none
        transition-all
      '>
                        {label}
                    </label>

                    <div className='relative'>
                        <input
                            type={inputType}
                            name={inputName}
                            value={inputValue}
                            onChange={onChange}
                            placeholder={InputPlaceholder}
                            required
                            className='
          w-full
          pl-12 sm:pl-16
          pr-10 sm:pr-14
          pt-8 sm:pt-10
          pb-2
          rounded-2xl
          bg-gray-200
          border border-transparent
          focus:border-blue-500 focus:outline-none
          transition-colors
          text-sm sm:text-base
          placeholder:text-gray-400
        '
                        />

                        {/* أيقونة اليسار */}
                        <span className='absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-500 text-lg sm:text-xl'>
                            {iconMail}
                        </span>

                        {/* أيقونة العين */}
                        <div onClick={OnClickEye}>
                            <span className='absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-lg sm:text-xl'>
                                {Eye}
                            </span>
                        </div>

                        {/* الخط الفاصل */}
                        <div className='absolute left-10 sm:left-14 top-1/2 -translate-y-1/2 h-6 sm:h-8 w-px bg-gray-300'></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainInput;
