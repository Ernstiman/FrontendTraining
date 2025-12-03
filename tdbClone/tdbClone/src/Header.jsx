import { useEffect } from "react";
import "./header.css";


export default function Header(){


    useEffect(() => {
        const textBlocks = document.getElementsByClassName('text-block');

        for(let block of textBlocks){
            block.addEventListener('click', (e) => {
                let isOpen = block.parentElement.classList.contains('open');
                let openNavs = document.querySelectorAll('.navbar-container.open');
                openNavs.forEach(nav => nav.classList.remove('open'));

                if(!isOpen) block.parentElement.classList.add("open");
            })

            }

        document.addEventListener("click", (e) => {
            let isInside = e.target.closest('navbar-container');
            if(!isInside){
                let openNavs = document.querySelectorAll('.navbar-container.open');
                openNavs.forEach(nav => nav.classList.remove('open'));
            }
        })
    })

    return(
        <header className="header">
        
        <div className="logo-container">
            <a className="logo-nav" href="https://recce.utn.se/">            
                <img className="logo-img" src="../img/logo.png"/>
            </a>
        </div>
        <div className="header-right-container">
            <div className="navbar-container">
                <div className="text-block">Om mottagningen</div>
                <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                        <h2>Inför mottagningen</h2>
                        <a className="dropdown-menu-links">
                            Checklista inför mottagningen
                        </a>
                        <a className="dropdown-menu-links">
                            Uppropet
                        </a>
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>Om mottagningen</h2>
                        <a className="dropdown-menu-links">
                            Läs om mottagningen
                        </a>
                        <a className="dropdown-menu-links">
                            For international students
                        </a>                        
                        <a className="dropdown-menu-links">
                            Vi är mottagningen
                        </a>                        
                        <a className="dropdown-menu-links">
                            Spel
                        </a>                        
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>Kontakt</h2>
                        <a className="dropdown-menu-links">
                            Kontakt
                        </a>
                        <a className="dropdown-menu-links">
                            Har något hänt dig?
                        </a>
                    </div>
                </div>
            </div>
            <div className="navbar-container">
                <div className="text-block">Student i Uppsala</div>
                <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                        <h2>Uppsala keknolog- och naturvetarkår</h2>   
                        <a className="dropdown-menu-links">Om UTN</a>                    
                        <a className="dropdown-menu-links">Ovveguide</a>                    
                        <a className="dropdown-menu-links">Spel</a>                    
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>Nationer</h2>
                        <a className="dropdown-menu-links">Nationer</a>                    
                        <a className="dropdown-menu-links">Ord som är bra att ha koll på</a>                    
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>Andra mottagningar</h2>
                        <a className="dropdown-menu-links">Om andra mottagnignar</a>                    
                    </div>
                </div>
            </div>
            <div className="navbar-container">
                <div className="text-block">Program och schema</div>
                <div className="dropdown-menu">
                    
                    <div className="dropdown-menu-columns">
                        <h2 className="dropdown-menu-header">Program</h2>
                        <a className="dropdown-menu-links">BAS</a>
                        <a className="dropdown-menu-links">B-Byggteknik</a>
                        <a className="dropdown-menu-links">DV-Datavetenskap</a>
                        <a className="dropdown-menu-links">E-Elektroteknik</a>
                        <a className="dropdown-menu-links">ES-Energisystem</a>
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2 className="dropdown-menu-header"></h2>
                        <a className="dropdown-menu-links">F-Teknisk fysik</a>
                        <a className="dropdown-menu-links">I-industriell eknomi</a>
                        <a className="dropdown-menu-links">IT-Informationsteknologi</a>
                        <a className="dropdown-menu-links">K-Kemiteknik</a>
                        <a className="dropdown-menu-links">M-Maskin</a>
                    </div>

                    <div className="dropdown-menu-columns">
                        <h2 className="dropdown-menu-header"></h2>
                        <a className="dropdown-menu-links">MT-Medicinteknik</a>
                        <a className="dropdown-menu-links">STS-System i tekik och samhälle</a>
                        <a className="dropdown-menu-links">Q-Teknisk fysik med materialvetenskap</a>
                        <a className="dropdown-menu-links">W-Miljö-och Vattenteknik</a>
                        <a className="dropdown-menu-links">X-Molekylär bioteknik</a>
                    </div>
                </div>
            </div>
            <div className="navbar-container">
                <div className="text-block">Bra att veta</div>
                <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                        <h2>Motagnings-området</h2>
                        <a className="dropdown-menu-links">Tältet och tältsläpp</a>
                        <a className="dropdown-menu-links">Reccentralen</a>
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>Event</h2>
                        <a className="dropdown-menu-links">Klassuppdrag</a>
                        <a className="dropdown-menu-links">SKATTJAKT!</a>
                        <a className="dropdown-menu-links">Biljetter till event</a>
                        <a className="dropdown-menu-links">ORBI-guide</a>
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>SPEL</h2>
                        <a className="dropdown-menu-links">SPEEEEL</a>

                    </div>
                </div>
            </div>
            <div className="navbar-container">
                <div className="text-block">Aktiviteter</div>
                 <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                        <h2>Vecka 1</h2>
                        <a className="dropdown-menu-links">Kår-och nationsinskrivning</a>
                        <a className="dropdown-menu-links">Tältsläpp Måndag</a>
                        <a className="dropdown-menu-links">Tisdagsfesten</a>
                        <a className="dropdown-menu-links">Märkesverkstad</a>
                        <a className="dropdown-menu-links">Expedition Recce</a>
                        <a className="dropdown-menu-links">Spexinfo</a>
                        <a className="dropdown-menu-links">Gasqueinfo</a>
                        <a className="dropdown-menu-links">Mottagningsmässan</a>
                        <a className="dropdown-menu-links">Stingfestivalen</a>
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>Vecka 2</h2>
                        <a className="dropdown-menu-links">Downtown[TA.sk]</a>
                        <a className="dropdown-menu-links">klassolympiaden</a>
                        <a className="dropdown-menu-links">Finaldagen</a>
                    </div>
                    <div className="dropdown-menu-columns">
                        <h2>Allmänna aktiviteter</h2>
                        <a className="dropdown-menu-links">Lunchföreläsningar</a>
                        <a className="dropdown-menu-links">Klassfester</a>
                        <a className="dropdown-menu-links">Reccegasquen</a>
                        <a className="dropdown-menu-links">Spela spel på hemsidan</a>
                    </div>
                </div>
            </div>
            <div className="navbar-container">
                <div className="text-block">Media</div>
                <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                    <h2>Media</h2>
                    <a className="dropdown-menu-links">Om Media</a>
                    <a className="dropdown-menu-links">Foton</a>
                    <a className="dropdown-menu-links">Fotobås</a>
                </div>
                <div className="dropdown-menu-columns">
                    <h2>Videor</h2>
                    <a className="dropdown-menu-links">Reccedansen</a>

                </div>
                <div className="dropdown-menu-columns">
                    <h2>Spel</h2>
                    <a className="dropdown-menu-links">Spel</a>
                </div>

                </div>

            </div>
        </div>
    </header>
    )
}