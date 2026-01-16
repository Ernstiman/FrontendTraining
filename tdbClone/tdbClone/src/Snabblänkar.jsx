import UseScrollAnimation from "./hookComponents/UseScrollAnimation"
import UseRenderAnimation from "./hookComponents/UseRenderAnimation"


const länkar = [[{title: "OM MOTTAGNINGEN", bgr: "./img/snabblänkar/om_mottagningen.jpg", cutout: "./img/gubbar/krims.png"},
    {title: "PROGRAM OCH SCHEMA", bgr: "./img/snabblänkar/program_och_schema.jpg", cutout: "./img/gubbar/koll.png"},
    {title: "FOTON", bgr: "./img/snabblänkar/bio.png", cutout: "./img/gubbar/krims.png", cutout: "./img/gubbar/spons.png"}],
    [{title: "BILJETTER - ORBI", bgr: "./img/snabblänkar/biljett.jpg", cutout: "./img/gubbar/taesk.png"},
    {title: "VI ÄR MOTTAGNINGEN", bgr: "./img/snabblänkar/vi_är_mottagningen.jpg", cutout: "./img/gubbar/phi.png"},
    {title: "SPEL", bgr: "./img/snabblänkar/binär.png", cutout: "./img/gubbar/binär.png"}],
    [{title: "KONTAKT", bgr: "./img/snabblänkar/kontakt.jpg", cutout: "./img/gubbar/trix.png"}]
]
export default function SnabbLänkar(){

    return (
        <div className="snabblänkar-grid-container">
            {länkar.map((row, i) => (
              <div className="snabblänkar-row">
                {row.map((column, j) => (
                     
                    <div className="snabblänk-cell">
                        <h2 className="snabblänk-cell-header">{column.title}</h2>
                        <img className="snabblänk-cell-bgr-img" src={column.bgr}/>
                        <UseScrollAnimation startFrame={1800 + 400 * i} endFrame={2200 + 400 * i} intensity={200}>
                            <img className="rekå-cutout snabblänk-cutout" src={column.cutout} alt="" />
                        </UseScrollAnimation>
                    </div>
                ))}
              </div>  
                
                
            ))}
        </div>
    )
}