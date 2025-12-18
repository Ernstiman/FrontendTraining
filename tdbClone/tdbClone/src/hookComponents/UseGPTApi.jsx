import OpenAi from "openai";
import dotenv from "dotenv";

export default async function UseGPTApi(input){

    const styleText = await fetch("/style.txt").then(res => res.text());
    const client = new OpenAi({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

    const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: [
            {role: "system",
            content: `Du är en ai assistent som ska hjälpa nya studenter på uppsala universitet TDB-mottagningen. Du ska endast svara på frågor som rör uppsala universitet och TDB-mottagningen.
            DU FÅR ENDAST svara med text som matchar denna textstil ${styleText}`
            },
            {
            role: "user",
            content: `${input}`
        }]
    })


    return response.output_text;
}