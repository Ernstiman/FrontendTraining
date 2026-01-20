import "./FrågaTaesk.css";
import { useContext, useEffect, useState } from "react";
import UseGPTApi from "./hookComponents/UseGPTApi";
import UseTypeEffect from "./hookComponents/UseTypeEffect";
import { MainContext } from "./App";


export default function FrågaTaesk(){

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loadingResp, setLoadingResp] = useState(false);
    const [writing, setWriting] = useState(false);
    const [talkingFrame, setTalkingFrame] = useState(false);
    const [, setPageType] = useContext(MainContext);
    useEffect(() => {
        setPageType(1);
    }, []);

    async function fetchApiData(e){
        e.preventDefault();

        setPrompt("");

        setLoadingResp(true);
        let resp = await UseGPTApi(prompt);
        setResponse(resp);
        setLoadingResp(false);


    }

    useEffect(() => {
    if(writing){

        
        const delay = 100;
        const timeOut = setTimeout(() => {
            setTalkingFrame(prev => !prev);
        }, delay);

        return () => {
            clearTimeout(timeOut)
        }
    }
    else{
        setTalkingFrame(false);
    }
    }, [writing, talkingFrame])

    return (
        <div className="fråga-taesk-container">
        
        <div className="chat-container">
            <img className="background" src="./img/matrixBackground.jpg" alt="" />
            <img className={`binär ${talkingFrame ? 'talking' : ''}`} src={`./img/${talkingFrame ? 'binärTalking' : 'binär'}.png`} alt="" />
            

        <div className="input-container">
            <form onSubmit={fetchApiData}>
                <input placeholder="Åhhh reccen skriver här såklart..." spellCheck={true} value={prompt} type="text" className="submit" id="hej" onChange={e => setPrompt(e.target.value)}/>
            </form>
        </div>
        </div>

        <div className="response-container">
                <div className="response-text-container">
                {response && !loadingResp
                ? 
                <UseTypeEffect setWriting={setWriting}>{response}</UseTypeEffect>
                : 
                loadingResp
                ?
                <UseTypeEffect setWriting={setWriting}>Åhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</UseTypeEffect>
                : 
                <UseTypeEffect setWriting={setWriting}>Åhhhh hej Reccen! Jag är din kottetroliga chatbot. Reccen kan med fördel fråga lite TAGGtastiska frågor</UseTypeEffect>}
                </div>
            </div>

            
        
        </div>
    )
}