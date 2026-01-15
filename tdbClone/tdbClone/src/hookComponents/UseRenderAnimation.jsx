import { Children, cloneElement } from 'react';
import { useEffect, useState } from 'react';
import {useInView} from 'react-intersection-observer';

export default function UseRenderAnimation({children, className, triggerOnce = true}){
    const {ref, inView} = useInView({
        triggerOnce: triggerOnce,
        threshold: 0.2
    });

    const [visable, setVisable] = useState(false);

    useEffect(() => {
        if(inView){
            setVisable(true);
        }
        else{
            setVisable(false);
        }
    }, [inView]);

    const renderedChildren = Children.map(children, (child) => {
                return cloneElement(child, {
                    ref: ref,
                    className: `${child.props.className} ${visable ? className : ''}`
                })
            })
    return (

        <div className={`render-animation-container`}>
            {renderedChildren}
        </div>
    )
}