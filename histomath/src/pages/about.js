// Home.js
import React from 'react';
import Appbar from '../components/Appbar';
import { Grid, Typography, Container, Card, CardContent } from '@mui/material';

function Home() {
  return (
    <div style={{ backgroundColor: '#fffdfb', minHeight: '100vh' }}>
      <Appbar />
      <Container maxWidth="md" sx={{ mt: 4}}>
        <Card sx={{ mb: 4, p: 2, backgroundColor: '#f9f9f9', boxShadow: 3, marginTop: '6em' }}>
          <CardContent>
            <Typography variant="h2" component="div" color='#8f350d' sx={{ fontWeight: 'bold', mb: 2 }}>
              About Histomath
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color='#5a0a0a'
              sx={{
                fontWeight: 'semi-bold',
                overflowY: 'auto',
                paddingRight: '1em',
                lineHeight: 1.6
              }}
            >
              Histomath is an innovative chatbot application that brings historical mathematicians to life, allowing users to engage with them and explore their insights, discoveries, and problem-solving methods. Through Histomath, users can interact with renowned mathematicians and inquire about their findings, approaches to mathematical challenges, and how they would solve problems within the context of their time periods. This unique platform highlights the evolution of mathematical concepts, showcasing how approaches and solutions can vary across different historical eras.
              <br /><br />
              Built with cutting-edge technology, Histomath leverages React for a seamless user interface, MUI for a polished design experience, and MongoDB on the cloud for secure data storage. The backend is powered by JavaScript and NodeJS, making Histomath a robust and interactive tool for exploring the history of mathematics in a conversational, engaging way.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Home;