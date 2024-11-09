// Home.js
import React from 'react';
import Appbar from '../components/Appbar';
import {Grid2 } from '@mui/material';

function Home() {
  return (
    <div style={{ backgroundColor: '#fffdfb', minHeight: '100vh' }}>
        <Grid2 container>
            <Grid2 size={12} sx={{pb: '3em'}}>
                <Appbar />
            </Grid2>

            <Grid2 size={12}>
                <h1>About Us Page</h1>
            </Grid2>
        
        </Grid2>
    </div>
  );
}

export default Home;
