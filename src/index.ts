import express, {Request, Response} from "express";
import {OpenAI} from "openai";
import * as dotenv from "dotenv";


dotenv.config();
const app = express();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());

app.post("/api", async (req: Request, res: Response) => {
    const {code} = req.body;
    const prompt = `Converta o seguinte código de automação para a sintaxe do robot framework: ${code}. Retorne
    apenas o código, não adicione nenhum comentário adicional, nem explique, apenas retorne o código formatado.`;
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: "Vocé é um especialista em automação de testes com mais de 20 anos de experiência e domina todos os frameworks e linguagens usados para esse fim."
            },
            {
                role: "user",
                content: prompt
            },
        ]
    })
    res.send(response.choices[0].message.content);
})

app.listen(3001, () => {
    console.log("Servidor online!");
})