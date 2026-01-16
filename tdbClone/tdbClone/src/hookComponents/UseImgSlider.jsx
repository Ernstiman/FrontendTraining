import { useState, useEffect } from "react";

export default function UseImgSlider({images}){

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const delay = 5000;
    const fadeOutDelay = 1000;
    useEffect(() => {

        const changeIndexTimeOut = setTimeout(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => {
                return prev + 1 > (images.length - 1) ? 0 : prev + 1;
            });
            setFade(true);
            }, fadeOutDelay)
            
        }, delay);

        return () => {
            clearTimeout(changeIndexTimeOut)
        }
    }, [index])

    return (
        <img className = {`menu-background-img ${fade ? 'fade-in' : 'fade-out'}`} src={images[index]}/>
    )
}