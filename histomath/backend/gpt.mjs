import OpenAI from "openai";
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 5000;
var name = "";
// Middleware
app.use(cors()); // Allow requests from different origins
app.use(express.json()); // Parse JSON bodies

// Example route
app.post('/message', (req, res) => {
    const query = req.body.query;
    console.log('Received query:', query);
    res.status(200).json({ message: 'Query received' });
    generateCompletion(name,query);
});

app.post('/profile/:mathguy', (req,res) => {
    name = req.params.mathguy;
    res.redirect(`http://localhost:3000/profile/${name}`);
});

app.post('/chat/:mathguy', (req,res) => {
    name = req.params.mathguy;
    res.redirect(`http://localhost:3000/chat/${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


const openai = new OpenAI({apiKey:process.env.OPEN_API_KEY});

async function generateCompletion(name,message){
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Answer like Euler, speak to the userand use the method that Euler would have used in order to solve the question." },
            {
                role: "user",
                content: "How do you solve sin(pi/5).",
            },
        ],
    });
    console.log(completion.choices[0].message);

};

generateCompletion();
