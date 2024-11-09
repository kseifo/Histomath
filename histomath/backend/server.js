// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Mathematician = require('./models/mathematician'); // Import the Mathematician model

const app = express();
const PORT = 30001;

app.use(cors());
app.use(express.json());

// MongoDB Connection using Atlas
mongoose.connect('mongodb+srv://User:user12@cluster0.zzc9w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});


// Define API Routes
app.get('/api/mathematicians', async (req, res) => {
    const mathematicians = await Mathematician.find();
    res.json(mathematicians);
});

// POST a new mathematician
app.post('/api/mathematicians', async (req, res) => {
    const newMathematician = new Mathematician(req.body); // Create a new mathematician from request body
    await newMathematician.save();                        // Save it to the database
    res.json(newMathematician);                           // Return the saved mathematician
});


// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
