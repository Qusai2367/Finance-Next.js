export function FindWord(text, targetWord) {
    if (!targetWord) return [text]; 

    const regex = new RegExp(`(${targetWord})`, "gi");
    return text.split(regex);
}