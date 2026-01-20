import OpenAi from "openai";
import dotenv from "dotenv";

export default async function UseGPTApi(input){

    const styleText = await fetch("/style.txt").then(res => res.text());
    const infoText = await fetch("/info.txt").then(res => res.text());
    const client = new OpenAi({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

    const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: [
            {role: "system",
            content: `Du är en ai assistent som ska hjälpa nya studenter på uppsala universitet under TDB-mottagningen. Du ska endast svara på frågor som rör TDB-mottagningen. All information som du fån använda finns i ${infoText}. Ett svar får inte ha mer än 250 ord.
            Du får inte skriva något kränkande eller använda ord som kan upplevas som stötande.  
            Du ska endast svara med dialekten given i ${styleText} detta är väldigt viktigt`
            },
            {
            role: "user",
            content: `${input}`
        }]
    })


    return response.output_text;
}