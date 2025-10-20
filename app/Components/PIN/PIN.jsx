import { ChevronRight, Delete } from "feather-icons-react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PIN = () => {
  return (
    <>
        <div className='flex box-border flex-col p-4 mt-30 items-center justify-center '>
                <p>Enter PIN</p>

                <div className='flex items-center justify-between gap-4 p-4'>
                    <div className='w-4 h-4 bg-gray-2 rounded-full'></div>
                    <div className='w-4 h-4 bg-gray-2 rounded-full'></div>
                    <div className='w-4 h-4 bg-gray-2 rounded-full'></div>
                    <div className='w-4 h-4 bg-gray-2 rounded-full'></div>
                    <div className='w-4 h-4 bg-gray-2 rounded-full'></div>
                    <div className='w-4 h-4 bg-gray-2 rounded-full'></div>
                </div>

                <p className='text-main mb-5 cursor-pointer'>Forget PIN ?</p>
                <div className='grid grid-cols-3 gap-4 '>
                    {array.map((num) => {
                        return (
                            <button
                                className='bg-gray-2 p-5 font-black text-xl rounded-2xl cursor-pointer'
                                key={num}>
                                {num}
                            </button>
                        );
                    })}

                    <button className=' p-5 font-black text-xl rounded-2xl cursor-pointer'>
                        Enter
                    </button>
                    <button className='bg-gray-2 p-5 font-black text-xl rounded-2xl cursor-pointer'>
                        0
                    </button>
                    <button className=' p-5 font-black text-xl rounded-2xl cursor-pointer'>
                        <Delete/>
                    </button>
                </div>
            </div>
    </>
  )
}

export default PIN
