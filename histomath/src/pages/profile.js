// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const { name } = useParams(); // Get the "name" from the URL
    const [mathematician, setMathematician] = useState(null);
    const [error, setError] = useState(null);
    const [allMathematicians, setAllMathematicians] = useState([]); // State to store all mathematicians

    useEffect(() => {
        // Fetch mathematician data by name
        axios.get(`http://localhost:30001/api/mathematicians/${name}`)
            .then(response => {
                setMathematician(response.data); // Set the fetched data
            })
            .catch(err => {
                setError("Mathematician not found"); // Handle error if not found
            });

        // Fetch all mathematicians for debugging
        axios.get('http://localhost:30001/api/mathematicians')
            .then(response => {
                setAllMathematicians(response.data); // Set all mathematicians data
            })
            .catch(err => {
                console.error('Error fetching all mathematicians:', err);
            });
    }, [name]);

    if (error) return <div>{error}</div>;

    if (!mathematician) return <div>Loading...</div>;

    return (
        <div>
            <h1>{mathematician.name}</h1>
            <p><strong>Birthday:</strong> {mathematician.birthday}</p>
            <p><strong>Biography:</strong> {mathematician.biography}</p>
            <h3>Key Findings:</h3>
            <ul>
                {mathematician.finding1 && <li>{mathematician.finding1}</li>}
                {mathematician.finding2 && <li>{mathematician.finding2}</li>}
                {mathematician.finding3 && <li>{mathematician.finding3}</li>}
            </ul>

            {/* Debugging: Display all mathematicians */}
            <h2>All Mathematicians in Database (for Debugging)</h2>
            <ul>
                {allMathematicians.map((m) => (
                    <li key={m._id}>{m.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;
