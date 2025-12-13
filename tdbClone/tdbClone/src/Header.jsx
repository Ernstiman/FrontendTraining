import { useEffect, useRef, useState } from "react";
import "./Header.css";
import HeaderNavBar from "./HeaderNavBar";

const NAVS = [{title: "Om mottagningen", columns: [
    {title: "Inför mottagningen", rows: ["Checklista inför mottagningen", "Uppropet"]},
    {title: "Om mottagningen", rows: ["Läs om mottagningen", "For international students", "Vi är mottagningen", "Spel"]},
    {title: "Kontakt", rows: ["Kontakt", "Har något hänt dig?"]}
]},
    {title: "Student i Uppsala", columns: [
        {title: "Uppsala teknolog-och naturvetarkår", rows: ["Om UTN", "Ovveguide", "Spel"]},
        {title: "Nationer", rows: ["Nationer", "Ord som är bra att ha koll på"]},
        {title: "Andra mottagningar", rows: ["Om andra mottagningar"]}
    ]},
{title: "Program och Schema", columns: [{
    title: "Program", rows: ["BAS", "B-Byggteknik", "DV-DataVetenskap", "E-Elektronik", "ES-Energisystem"]},
        {title: null, rows: ["F-Teknisk fysik", "I-Industriell ekonomi", "IT-Informationsteknologi", "K-Kemiteknik", "M-Maskin"]},
        {title:null, rows: ["MT-Medicinteknik", "STS-System i teknik och samhälle", "Q-Teknisk fysik med materialvetenskap", "W-Miljö-och Vattenteknik", "X-Molekylär bioteknik"]}

]}];

export default function Header(){

    const [currentNavIndex, setCurrentNavIndex] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const navs = useRef([]);    

    useEffect(() => {
        const onClick = (e) => {
            if(!e.target.closest('.dropdown-menu-container') && !e.target.closest('.text-block')){
                setCurrentNavIndex(null);
            }
        }

        document.addEventListener("click", onClick);

        return () => document.removeEventListener("click", onClick);
    }, [])

      useEffect(() => {
        let prevScroll = Infinity;
        const handleScroll = () => {
            if(prevScroll && window.scrollY < prevScroll){
                setShowHeader(true);
            }
            else{
                setShowHeader(false);
                console.log("hide header");
            }
            prevScroll = window.scrollY;
        }
            window.addEventListener("scroll", handleScroll);

          return () => window.removeEventListener("scroll", handleScroll);
        }, [])

    return(
        <header className={`header ${!showHeader ? 'hide' : ''}`}>
        
        <div className="logo-container">
            <a className="logo-nav" href="https://recce.utn.se/">            
                <img className="logo-img" src="./img/logo.png"/>
            </a>
        </div>
        <div className="header-right-container">
            {NAVS.map((nav, i) => ( 
                <HeaderNavBar key = {i} 
                    title = {NAVS[i].title}
                    columns = {NAVS[i].columns}
                    onClick = {() => setCurrentNavIndex((prev) => prev == i ? null : i)}
                    isOpen = {currentNavIndex === i}
                    ref = {(el) => navs[i] = el} // Sets the ref of the component in the navs array
                />
            ))}
        </div>
    </header>
    )
}