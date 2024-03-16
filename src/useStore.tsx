import React, { useEffect, useState } from 'react'
import words from "./wordList.json"

function useStore() {

    const [word, setWord] = useState(() => words[Math.floor(Math.random() * (words.length - 1))]);
    const [bodyParts, setBodyParts] = useState(["hidden", "hidden", "hidden", "hidden", "hidden", "hidden"]);
    const [wordParts, setWordParts] = useState(() => word.split("").map(_ => "hidden"));

    useEffect(() => {
        console.log("word", word);
        console.log("word parts ", wordParts);
        console.log("body parts", bodyParts);
    }, []);

    function guessing(char: string) {
        let index = word.indexOf(char.toLowerCase());
        if (index >= 0) {
            setWordParts((prev): string[] => {
                const array = [...prev];
                array[index] = "visible";
                return array;
            });
        } else if (index === -1) {
            setBodyParts((prev): string[] => {
                const array: string[] = [...prev];
                array[array.indexOf("hidden")] = "visible";
                return array;
            });
        }
    }


    function setNewWord(w: string = ""): void {
        if (w == "") {
            let index: number = Math.floor(Math.random() * words.length)
            setWord(words[index])
        } else {
            setWord(w)
        }
    }

    return { word, setNewWord, bodyParts, guessing, wordParts }
}

export default useStore