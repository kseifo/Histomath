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

// server.js
app.get('/api/mathematicians/:name', async (req, res) => {
    try {
        // Decode URL-encoded characters, replace dashes with spaces, and convert to lowercase
        const normalizedName = decodeURIComponent(req.params.name)
            .replace(/-/g, ' ')
            .toLowerCase();

        // Use a case-insensitive search in MongoDB
        const mathematician = await Mathematician.findOne({ name: new RegExp(`^${normalizedName}$`, "i") });

        if (!mathematician) return res.status(404).json({ message: "Mathematician not found" });

        res.json(mathematician);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving mathematician", error });
    }
});


// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
