
import { useEffect, useState } from "react";

export default function UseTypeEffect({children, setWriting = null}){

    const [textIndex, setTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const delay = 50;
    const text = typeof children === 'string' ? children : String(children);


    useEffect(() => {
        setTextIndex(0);
        setCurrentText("");
    }, [text]);
    
    useEffect(() => {

        if(textIndex < children.length){ 
            setWriting(true);
            const timeOut = setTimeout(() => {
            setTextIndex(prev => prev + 1);

            setCurrentText(prev => prev + text[textIndex]);
            }, delay);

            return () => {
                setWriting(false);
                clearTimeout(timeOut);
            }
        }
        
    }, [textIndex, currentText]);


    return (
        <p>{currentText}</p>
    )
}