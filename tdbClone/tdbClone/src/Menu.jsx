
import { useEffect, useState } from 'react';
import {useInView} from 'react-intersection-observer';
import UseRenderAnimation from './hookComponents/UseRenderAnimation';
import UseScrollAnimation from './hookComponents/UseScrollAnimation';
import SnabbLänkar from './Snabblänkar';
import UseImgSlider from './hookComponents/UseImgSlider';
export default function Menu(){

    const images = ["./img/bakgrunder/disco.JPG", "./img/bakgrunder/grupp.jpg", "./img/bakgrunder/program_och_schema.jpg"];
    return (
        <div className="menu-container">
            
            {/* <img src="./img/mainPage.jpg" className="menu-background-img" /> */}
            <UseImgSlider images={images}/>
            <div className="menu-background-img-overlay"/>
            <h1 className="menu-img-text">Välkommen Till TDB-Mottagningen</h1>
            <div className="second-menu-slide">
                <div className="custom-shape-divider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <UseRenderAnimation className='small-fade' triggerOnce={true}>
                    <div className="text-box-1">
                        
                    <h2>GRATTIS OCH VÄLKOMMEN TILL UPPSALA!</h2>
                    <p>Du har valt att börja studera på TekNat-fakulteten vid Uppsala universitet, ett fantastiskt bra val som du knappast kommer att ångra. Måndagen den 25:a august börjar ditt otroliga studentäventyr.
                        Vi på Uppsala teknolog- och naturvetarkår arrangerar en mottagning för dig och de andra cirka 1200 nya studenterna på TekNat-fakulteten. 
                        <br/>
                        <br/>
                        Under mottagningen så kommer Instagram användas som informationskanal och det är därför viktigt att reccen följer den flitigt för att inte missa något! Reccen rekommenderas självklart att utforska snabblänkarna nedan så att reccen har koll på att dom behöver veta innan den stora dagen
                    </p>
                </div>
                </UseRenderAnimation>
                <UseScrollAnimation startFrame={600} endFrame={1000} intensity={200}>
                    <img src="./img/generalen.png" className='rekå-cutout'/> 
                    <img src="./img/spänn.png" className='rekå-cutout spänn'></img>   
                </UseScrollAnimation>
            </div>

            <div className='third-menu-slide'>
                
                <div className='title-container'>
                    <h1 className='title'>SNABBLÄNKAR</h1>
                </div>
                <SnabbLänkar/>
            </div>
        </div>
    )
}