import { Children, cloneElement } from 'react';
import { useEffect, useState } from 'react';
import {useInView} from 'react-intersection-observer';

export default function UseRenderAnimation({children, className}){
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [visable, setVisable] = useState(false);

    useEffect(() => {
        if(inView){
            setVisable(true);
        }
    }, [inView]);

    const renderedChildren = Children.map(children, (child) => {
                return cloneElement(child, {
                    ref: ref,
                    className: `${child.props.className} ${visable ? 'render' : ''}`
                })
            })
    return (

        <div className='render-animation-container'>
            {renderedChildren}
        </div>
    )
}