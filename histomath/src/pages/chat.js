// Home.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Appbar from '../components/Appbar';
import { Grid2, Typography, TextField, IconButton } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MarkdownRenderer from '../preprocessing/latexpre'

// Import images
import Euclid from '../assets/euclid.jpg';
import Euler from '../assets/euler.jpg';
import Gauss from '../assets/gauss.jpg';
import Newton from '../assets/newton.jpg';
import Leibniz from '../assets/leibniz.jpg';
import Khawarizmi from '../assets/khawarizmi.jpg';

import CircularProgress from '@mui/material/CircularProgress';
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';

const Chat = () => {
    const { name } = useParams();
    const [mathematician, setMathematician] = useState(null);
    const [query, setQuery] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    // Map of mathematician names to images
    const imageMap = {
        "euclid": Euclid,
        "leonhard euler": Euler,
        "carl friedrich gauss": Gauss,
        "isaac newton": Newton,
        "gottfried wilhelm leibniz": Leibniz,
        "muhammad al khwarizmi": Khawarizmi
    };

    // Fetch mathematician data on component load
    useEffect(() => {
        axios.get(`http://localhost:30001/api/mathematicians/${name}`)
            .then(response => {
                setMathematician(response.data);
            })
            .catch(() => {
                console.error("Mathematician not found");
            });
    }, [name]);

    // Get the corresponding image based on the fetched mathematician’s name
    const formattedName = mathematician?.name.toLowerCase();
    const mathematicianImage = imageMap[formattedName]; // Fallback to Euclid image if not found

    const handleQuerySubmit = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5001/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, query })
            });
            setQuery('');
            if (response.ok) {
                const data = await response.json();
                setAnswer(data.answer);
            } else {
                console.error('Failed to send query');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundColor: '#fffdfb', minHeight: '100vh' }}>
            <Grid2 container>
                <Grid2 size={12} sx={{ pb: '3em' }}>
                    <Appbar />
                </Grid2>

                <Grid2 container size={12} spacing={3} sx={{ display: 'flex', minHeight: '100vh', padding: '2em' }}>
                    {/* Column 1: Image and Name */}
                    <Grid2 item size={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em', borderRightColor: '#faede8' }}>
                        <img
                            src={mathematicianImage}
                            alt={mathematician?.name || "Mathematician"}
                            style={{ height: '350px', width: '350px', objectFit: 'cover', borderRadius: '100%' }}
                        />
                        <Typography variant="h4" component="div" color='#8f350d' sx={{ fontWeight: 'bold', marginTop: '1em', textAlign: 'center' }}>
                            {mathematician?.name}
                        </Typography>

                        {/* Show CircularProgress only if loading is true */}

                        {loading && (
                            <>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    color="#8f350d"
                                    sx={{marginTop: '1em', textAlign: 'center' }}
                                >
                                    {mathematician?.name} is thinking...
                                </Typography>
                                <CircularProgress
                                    sx={{ color: '#ff5b12', mt: '1em' }}
                                />
                            </>
                        )}

                    </Grid2>

                    {/* Column 2: Answer Text and Input Field */}
                    <Grid2 item size={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h3" component="div" color='#8f350d' sx={{ fontWeight: 'bold', marginBottom: '0.5em' }}>
                            Chat with {mathematician?.name}
                        </Typography>

                        <Typography
                            variant="h5"
                            component="div"
                            color='#5a0a0a'
                            height={'450px'}
                            sx={{
                                marginLeft: '1em',
                                fontWeight: 'semi-bold',
                                maxHeight: '450px',
                                overflowY: 'auto',
                                paddingRight: '1em'
                            }}
                        >
                            <MarkdownRenderer content={answer} />
                        </Typography>

                        <Grid2 container size={12} spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid2 size={8}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    multiline
                                    maxRows={2}
                                    fullWidth
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    sx={{ marginTop: '1em' }}
                                />
                            </Grid2>
                            <Grid2 item sx={{ display: 'flex', justifyContent: 'center', marginLeft: '0.5em' }}>
                                <IconButton onClick={handleQuerySubmit}>
                                    <ArrowCircleRightIcon sx={{ color: '#843b1b', fontSize: '1.5em' }} />
                                </IconButton>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>


            </Grid2>
        </div>
    );
};

export default Chat;
