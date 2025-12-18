import OpenAi from "openai";
import dotenv from "dotenv";

export default async function UseGPTApi(input){

    const client = new OpenAi({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

    const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: [{
            role: "user",
            content: `${input}`
        }]
    })


    return response.output_text;
}