import "./FrågaTaesk.css";
import { useState } from "react";
import UseGPTApi from "./hookComponents/UseGPTApi";

export default function FrågaTaesk(){

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loadingResp, setLoadingResp] = useState(false);

    async function fetchApiData(e){
        e.preventDefault();
        setLoadingResp(true);
        let resp = await UseGPTApi(prompt);
        setPrompt("");
        setResponse(resp);
        setLoadingResp(false);


    }

    return (
        <div className="chat-container">
            <form onSubmit={fetchApiData}>
                <input spellCheck={true} value={prompt} type="text" className="submit" id="hej" onChange={e => setPrompt(e.target.value)}/>
            </form>

            {response && !loadingResp
            ? 
            <p>{response}</p>
            : 
            loadingResp
            ?
            <p>Loading...</p>
            : 
            null}
        </div>
    )
}