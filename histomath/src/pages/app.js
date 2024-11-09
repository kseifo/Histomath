// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [newMathematician, setNewMathematician] = useState({
        name: '',
        birthday: '',
        biography: '',
        finding1: '',
        finding2: '',
        finding3: ''
    });
    const [message, setMessage] = useState("The database is currently empty.");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:30001/api/mathematicians', newMathematician)
            .then(response => {
                setMessage("Mathematician added successfully!"); // Update message on successful submission
                setNewMathematician({
                    name: '',
                    birthday: '',
                    biography: '',
                    finding1: '',
                    finding2: '',
                    finding3: ''
                }); // Clear form fields
            })
            .catch(error => {
                console.error('Error adding mathematician:', error);
                setMessage("Failed to add mathematician."); // Update message on error
            });
    };

    return (
        <div>
            <h1>Mathematicians</h1>
            <p>{message}</p> {/* Display placeholder message or success message */}

            <h2>Add New Mathematician</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newMathematician.name}
                    onChange={(e) => setNewMathematician({ ...newMathematician, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Birthday"
                    value={newMathematician.birthday}
                    onChange={(e) => setNewMathematician({ ...newMathematician, birthday: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Biography"
                    value={newMathematician.biography}
                    onChange={(e) => setNewMathematician({ ...newMathematician, biography: e.target.value })}
                    required
                />

                {/* Individual input fields for each finding */}
                <input
                    type="text"
                    placeholder="Finding 1"
                    value={newMathematician.finding1}
                    onChange={(e) => setNewMathematician({ ...newMathematician, finding1: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Finding 2"
                    value={newMathematician.finding2}
                    onChange={(e) => setNewMathematician({ ...newMathematician, finding2: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Finding 3"
                    value={newMathematician.finding3}
                    onChange={(e) => setNewMathematician({ ...newMathematician, finding3: e.target.value })}
                />

                <button type="submit">Add Mathematician</button>
            </form>
        </div>
    );
}

export default App;
