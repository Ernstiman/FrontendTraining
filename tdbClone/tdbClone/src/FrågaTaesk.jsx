import "./FrågaTaesk.css";
import { useEffect, useState } from "react";
import UseGPTApi from "./hookComponents/UseGPTApi";
import UseTypeEffect from "./hookComponents/UseTypeEffect";

export default function FrågaTaesk(){

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loadingResp, setLoadingResp] = useState(false);
    const [writing, setWriting] = useState(false);
    const [talkingFrame, setTalkingFrame] = useState(false);
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
        <>
        <div className="response-container">
                <div className="response-text-container">
                {response && !loadingResp
                ? 
                <UseTypeEffect setWriting={setWriting}>{response}</UseTypeEffect>
                : 
                loadingResp
                ?
                <p>...</p>
                : 
                <UseTypeEffect setWriting={setWriting}>Åhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh kanske bra så</UseTypeEffect>}
                </div>
            </div>

        <div className="chat-container">
            <img className="background" src="./img/matrixBackground.jpg" alt="" />
            <img className={`binär ${talkingFrame ? 'talking' : ''}`} src={`./img/${talkingFrame ? 'binärTalking' : 'binär'}.png`} alt="" />
            

        <div className="input-container">
            <form onSubmit={fetchApiData}>
                <input placeholder="skriv här såklart..." spellCheck={true} value={prompt} type="text" className="submit" id="hej" onChange={e => setPrompt(e.target.value)}/>
            </form>
        </div>

            
        </div>
        </>
    )
}