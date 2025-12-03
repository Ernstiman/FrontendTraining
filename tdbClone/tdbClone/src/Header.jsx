import { useEffect, useRef, useState } from "react";
import "./header.css";
import HeaderNavBar from "./HeaderNavBar";

const NAVS = [{title: "Om mottagningen", columns: [
    {title: "Inför mottagningen", rows: ["Checklista inför mottagningen", "Uppropet"]},
    {title: "Om mottagningen", rows: ["Läs om mottagningen", "For international students", "Vi är mottagningen", "Spel"]},
    {title: "Kontakt", rows: ["Kontakt", "Har något hänt dig?"]}
]}];

export default function Header(){

    const [currentNavIndex, setCurrentNavIndex] = useState(null);
    const navs = useRef([]);    

    return(
        <header className="header">
        
        <div className="logo-container">
            <a className="logo-nav" href="https://recce.utn.se/">            
                <img className="logo-img" src="../img/logo.png"/>
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
                ></HeaderNavBar>
            ))}
        </div>
    </header>
    )
}