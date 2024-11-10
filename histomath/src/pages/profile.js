// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Appbar from '../components/Appbar';
import { Button, Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

// Import images
import Euclid from '../assets/euclid.jpg';
import Euler from '../assets/euler.jpg';
import Gauss from '../assets/gauss.jpg';
import Newton from '../assets/newton.jpg';
import Leibniz from '../assets/leibniz.jpg';
import Khawarizmi from '../assets/khawarizmi.jpg';

function Profile() {
    const { name } = useParams(); // Get the "name" from the URL
    const navigate = useNavigate();
    const [mathematician, setMathematician] = useState(null);
    const [error, setError] = useState(null);

    // Map of mathematicians to their images
    const imageMap = {
        "Euclid": Euclid,
        "Leonhard Euler": Euler,
        "Carl Friedrich Gauss": Gauss,
        "Isaac Newton": Newton,
        "Gottfried Wilhelm Leibniz": Leibniz,
        "Muhammad Al Khwarizmi": Khawarizmi
    };

    useEffect(() => {
        // Fetch mathematician data by name
        axios.get(`http://localhost:30001/api/mathematicians/${name}`)
            .then(response => {
                setMathematician(response.data); // Set the fetched data
            })
            .catch(err => {
                setError("Mathematician not found"); // Handle error if not found
            });
    }, [name]);

    const handleChatRedirect = (finding) => {
        navigate(`/chat/${name}`, {state: {query: finding}});
    };

    const handleChatRedirectRaw = () => {
        navigate(`/chat/${name}`);
    };

    if (error) return <div>{error}</div>;
    if (!mathematician) return <div>Loading...</div>;

    // Get the image for the mathematician
    const mathematicianImage = imageMap[mathematician.name] || Euclid; // Fallback to Euclid image if not found

    return (
        <div style={{ backgroundColor: '#fffdfb', minHeight: '100vh' }}>
            <Grid2 sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid2 size={12} sx={{ marginBottom: '1em' }}>
                    <Appbar />
                </Grid2>

                <Grid2 container spacing={2} sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
                    <Grid2 item size={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={mathematicianImage}
                            alt={mathematician.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
                        />
                    </Grid2>
                    <Grid2 item size={6} marginTop={3} sx={{margin:'auto'}}>
                        <Typography variant="h2" component="div" color='#8f350d' sx={{ fontWeight: 'bold' }}>
                            {mathematician.name}
                        </Typography>
                        <Typography variant="h5" component="div" color='#5a0a0a' sx={{ marginBottom: '0.5em' }}>
                            {mathematician.birthday}
                        </Typography>
                        <Typography variant="h6" component="div" color='#5a0a0a'>
                            {mathematician.biography}
                        </Typography>

                        <Grid2 container spacing={2} sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '3em'}}>
                            {/* First Row */}
                            <Grid2 container item xs={12} sx={{ justifyContent: 'center' }}>
                                <Grid2 item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: '200px', height: '80px', whiteSpace: 'normal', textAlign: 'center', backgroundColor:"#8f350d", textTransform: 'none', fontWeight: 'semi-bold'}}
                                        onClick={() => handleChatRedirect(mathematician.finding1)}
                                    >
                                        {mathematician.finding1}
                                    </Button>
                                </Grid2>
                                <Grid2 item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: '200px', height: '80px', whiteSpace: 'normal', textAlign: 'center', backgroundColor:"#8f350d", textTransform: 'none', fontWeight: 'semi-bold' }}
                                        onClick={() => handleChatRedirect(mathematician.finding2)}
                                    >
                                        {mathematician.finding2}
                                    </Button>
                                </Grid2>
                            </Grid2>

                            {/* Second Row */}
                            <Grid2 container item xs={12} sx={{ justifyContent: 'center' }}>
                                <Grid2 item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: '200px', height: '80px', whiteSpace: 'normal', textAlign: 'center', backgroundColor:"#8f350d", textTransform: 'none', fontWeight: 'semi-bold'}}
                                        onClick={() => handleChatRedirect(mathematician.finding3)}
                                    >
                                        {mathematician.finding3}
                                    </Button>
                                </Grid2>
                                <Grid2 item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: '200px', height: '80px', whiteSpace: 'normal', textAlign: 'center', backgroundColor:"#d65f2b", textTransform: 'none', fontWeight: 'semi-bold'}}
                                        endIcon={<SendIcon />}
                                        onClick={() => handleChatRedirectRaw()}
                                    >
                                        Chat with {mathematician.name}
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </Grid2>


                    </Grid2>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default Profile;
