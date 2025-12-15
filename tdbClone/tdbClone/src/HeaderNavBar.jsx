import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function HeaderNavBar({title, columns, onClick, isOpen}){

    

    return(
        <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
            <div onClick={(e) => onClick()}className="text-block">{title}</div>
            <div className="dropdown-menu-container">
            <div className="dropdown-menu">
                {columns.map((col, i) => (
                    <div key={i} className="dropdown-menu-columns">
                        <h2 className = "dropdown-header">{col.title}</h2>
                        {col.rows.map((item, j) => (
                            <div className="dropdown-menu-links">
                                {item == "Fråga [Tæ:sk]"
                                ? <Link to="/FrågaTaesk">{item}</Link>
                                : <a key={j}>{item}</a>
                                }
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}