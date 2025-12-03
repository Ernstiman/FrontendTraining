import { useEffect } from "react"

export default function HeaderNavBar({title, columns, onClick, isOpen}, ref){

    return(
        <div ref = {ref} className={`navbar-container ${isOpen ? 'open' : ''}`}>
            <div onClick={(e) => onClick()}className="text-block">{title}</div>
            <div className="dropdown-menu">
                {columns.map((col, i) => (
                    <div key={i} className="dropdown-menu-columns">
                        {col.rows.map((item, j) => (
                            <a className="dropdown-menu-links" key={j}>{item}</a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}