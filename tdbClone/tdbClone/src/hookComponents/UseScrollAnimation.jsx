import { Children, cloneElement, useEffect, useState } from "react";

export default function UseScrollAnimation({children, startFrame, endFrame, intensity}){

    const [imgOpacity, setImgOpacity] = useState(0);
    const [imgY, setImgY] = useState(0);
    useEffect(() => {

        const handleScroll = () => {

            const scrollY = window.scrollY;
            let opacity = 0;
            let yPos = 0;
            let fraction = (scrollY - startFrame) / (endFrame - startFrame);
            if(scrollY > startFrame){
                yPos = Math.max(intensity - fraction * intensity, 0);
                opacity = Math.min(fraction, 1);
            }
            setImgY(yPos);
            setImgOpacity(opacity);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    })

    const clonedChildren = Children.map(children, child => {
        return cloneElement(child, {
            style: {opacity: imgOpacity, transform: `translateY(${imgY}px)`}
        })
    })

    return (
        <div className="scroll-render-animation-container">
            {clonedChildren}
        </div>
    )
}