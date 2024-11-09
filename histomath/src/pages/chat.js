// Home.js
import React from 'react';
import Appbar from '../components/Appbar';
import { Button, Grid, Grid2 } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Chat = () => {
    const [query, setQuery] = React.useState('');

    const handleQuerySubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });
            setQuery('');
            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // "Query received" from backend
            } else {
                console.error('Failed to send query');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div style={{ backgroundColor: '#fffdfb', minHeight: '100vh' }}>
            <Grid2 container>
                <Grid2 size={12} sx={{ pb: '3em' }}>
                    <Appbar />
                </Grid2>

                <Grid2 size={12}>
                    <h1>Chat Page Undergoing...</h1>
                </Grid2>

                <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid2 size={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            multiline
                            maxRows={2}
                            fullWidth
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Grid2>
                    <Grid2 size={3} sx={{ display: 'flex', marginLeft: '0.5em' }}>
                        <IconButton onClick={handleQuerySubmit}>
                            <ArrowCircleRightIcon sx={{ color: '#843b1b', fontSize: '1.5em' }} />
                        </IconButton>
                    </Grid2>

                </Grid2>

            </Grid2>
        </div>
    );
}

export default Chat;
