import OpenAI from "openai";
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 5001;
// Middleware
app.use(cors()); // Allow requests from different origins
app.use(express.json()); // Parse JSON bodies

// Example route
app.post('/message',async (req, res) => {
    const {name, query} = req.body;
    const ans = await generateCompletion(name,query);
    res.status(200).json({answer: ans});
});

app.post('/profile/:mathguy', (req,res) => {
    res.redirect(`http://localhost:3000/profile/${req.params.mathguy}`);
});

app.post('/chat/:mathguy', (req,res) => {
    res.redirect(`http://localhost:3000/chat/${req.params.mathguy}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


const openai = new OpenAI({apiKey:process.env.OPEN_API_KEY});

async function generateCompletion(name,message){

    const userMsg = `You are ${name}. Answer in the perspective of him like you are talking to the one who asked and provide a solution that he wouldve done with the mathematical advancements in his time. Talk like you're talking to a student and explain each step well and go for the solution on a step by step basis. Answer/solve this: ` + message;
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are acting like a mathematician. Be professional and concise." },
            {
                role: "user",
                content: userMsg,
            },
        ],
    });
    return completion.choices[0].message.content;

};