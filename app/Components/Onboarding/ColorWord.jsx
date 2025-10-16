import { FindWord } from "@/app/utilities/FindWord";

const ColoredTitle = ({ text, highlight }) => {
    const textParts = FindWord(text, highlight);

    return (
        <>
            <h1 className='text-6xl leading-tight mb-2.5 font-black'>
                {textParts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className='text-main font-bold'>
                            {part}
                        </span>
                    ) : (
                        part
                    )
                )}
            </h1>
        </>
    );
};

export default ColoredTitle;