// Home.js
import React from 'react';
import Appbar from '../components/Appbar';
import {Grid2 } from '@mui/material';
import BigLogo from '../assets/Histomath Black Full Logo.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Euler from '../assets/euler.jpg';
import Euclid from '../assets/euclid.jpg';
import Khawarizmi from '../assets/khawarizmi.jpg';
import Newton from '../assets/newton.jpg';
import Gauss from '../assets/gauss.jpg';
import Leibniz from '../assets/leibniz.jpg';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const handleProfileSubmit = async (profile) => {
        try {
            const response = await fetch(`http://localhost:5001/profile/${profile}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                navigate(`/profile/${profile}`);
            } else {
                console.error('Failed to send query');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChatSubmit = async (name) => {
        try{
            const response = await fetch(`http://localhost:5001/chat/${name}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.ok){
                navigate(`/chat/${name}`);
            } else {
                console.error('Failed to send query');
            }
        }catch(error){
            console.error('Error: ', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#fffdfb', minHeight: '100vh' }}>
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0.5;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    .fade-in {
                        animation: fadeIn 0.8s ease-in-out;
                    }
                `}
            </style>

            <Grid2 sx={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* ROW */}
                <Grid2 size={12}>
                    <Appbar />
                </Grid2>
                {/* ROW */}
                <Grid2 xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '5em' }} className="fade-in">
                    <img src={BigLogo} alt="Histomath Logo" style={{ width: '50%', height: 'auto' }} />
                </Grid2>

                {/* Scientist Row 1 */}
                <Grid2 container xs={12} spacing={5} sx={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }} className="fade-in">
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="euler"
                            height="160"
                            width="300"
                            image={Euler}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Leonhard Euler
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Swiss mathematician, physicist, astronomer, logician and engineer.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleProfileSubmit('Leonhard-Euler'); }}>Learn More</Button>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleChatSubmit('Leonhard-Euler'); }}>Chat to Euler</Button>
                        </CardActions>
                    </Card>

                    {/* Euclid */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="euclid"
                            height="160"
                            width="300"
                            image={Euclid}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Euclid
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Greek mathematician, often referred to as the "founder of geometry" or the "father of geometry".
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleProfileSubmit('Euclid'); }}>Learn More</Button>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleChatSubmit('Euclid'); }}>Chat to Euclid</Button>
                        </CardActions>
                    </Card>
                    {/* Khawarizmi */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="khawarizmi"
                            height="160"
                            width="300"
                            image={Khawarizmi}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Muhammad Al-Khwarizmi
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Persian mathematician, astronomer, geographer and scholar in the House of Wisdom in Baghdad.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleProfileSubmit('Muhammad-Al-Khwarizmi'); }}>Learn More</Button>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleChatSubmit('Muhammad-Al-Khwarizmi'); }}>Chat to Khawarizmi</Button>
                        </CardActions>
                    </Card>
                </Grid2>

                {/* Scientist Row 2 */}
                <Grid2 container xs={12} spacing={5} sx={{ display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '3em' }} className="fade-in">
                    {/* Newton */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="newton"
                            height="160"
                            width="300"
                            image={Newton}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Isaac Newton
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                English mathematician, physicist, astronomer, theologian, and author.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleProfileSubmit('Isaac-Newton'); }}>Learn More</Button>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleChatSubmit('Isaac-Newton'); }}>Chat to Newton</Button>
                        </CardActions>
                    </Card>
                    {/* Gauss */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="gauss"
                            height="160"
                            width="300"
                            image={Gauss}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Carl Friedrich Gauss
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                German mathematician, astronomer, and physicist.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleProfileSubmit('Carl-Friedrich-Gauss'); }}>Learn More</Button>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleChatSubmit('Carl-Friedrich-Gauss'); }}>Chat to Gauss</Button>
                        </CardActions>
                    </Card>
                    {/* Leibniz */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="leibniz"
                            height="160"
                            width="300"
                            image={Leibniz}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Gottfried Wilhelm Leibniz
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                German polymath who was active as a mathematician, philosopher, scientist, diplomat, and librarian.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleProfileSubmit('Gottfried-Wilhelm-Leibniz'); }}>Learn More</Button>
                            <Button sx={{ color: '#8f350d' }} size="small"onClick={() => {handleChatSubmit('Gottfried-Wilhelm-Leibniz'); }}>Chat to Leibniz</Button>
                        </CardActions>
                    </Card>
                </Grid2>

            </Grid2>

        </div>
    );
}

export default Home;
