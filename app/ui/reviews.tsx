'use client'
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from 'react';

export default function Reviews() {
    const [formData, setFormData] = useState({
        name: '',
        rating: '',
        comment: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setFormData({ name: '', rating: '', comment: '' });
            setTimeout(() => {
                window.location.href = '/sendReview';
            }, 2000);
        } else {
            console.error('Error: Failed to submit review');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ width: '100%', maxWidth: 600 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, p: 1 }}>
                <Box sx={{
                    justifyContent: "center", borderRadius: '15px', width: { xs: '100%', sm: '80%' }, ml: { xs: 0, sm: 6, lg: 8 }, '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white on hover
                    }
                }}>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={11} lg={9} sx={{ display: 'flex', justifyContent: 'left' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontsize: { xs: '0.85em' } }} gutterBottom>
                                Recension
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                margin="normal"
                                required
                                id="name"
                                label="Fyll i ditt namn"
                                name="name"
                                placeholder="Namn"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1.2em'
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#333',
                                        borderRadius: '10px'
                                    }
                                }}
                                sx={{
                                    width: { xs: '90%', sm: '80%', lg: '70%' },
                                    '& .MuiInputLabel-root': {
                                        fontSize: { xs: '1.7em', sm: '2.3em', lg: '3em' }
                                    },
                                    '& .MuiInputBase-input': {
                                        fontSize: { xs: '0.8rem', sm: '1rem', lg: '1.2rem' }
                                    }
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                margin="normal"
                                required
                                id="rating"
                                label="Betyg"
                                name="rating"
                                type="number"
                                value={formData.rating}
                                onChange={handleChange}
                                InputProps={{
                                    inputProps: { min: 0, max: 5 },
                                    style: {
                                        backgroundColor: '#333',
                                        borderRadius: '10px',
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1.15rem'
                                    }
                                }}
                                placeholder="0-5"
                                sx={{ width: { xs: '90%', sm: '80%', lg: '70%' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                margin="normal"
                                required
                                id="comment"
                                label="Kommentar"
                                name="comment"
                                placeholder="Din kommentar"
                                multiline
                                rows={4}
                                value={formData.comment}
                                onChange={handleChange}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#333',
                                        borderRadius: '10px',
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1.15rem'
                                    }
                                }}
                                sx={{ width: { xs: '90%', sm: '80%', lg: '70%' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    xs: { mt: 3, mb: 2, width: '60%' },
                                    lg: { mt: 3, mb: 2, width: '40%' }
                                }}
                                color="primary"
                            >
                                Skicka
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                {/* {message && <p className={error ? 'error' : 'success'}>{message}</p>} */}
            </Box>

        </Container>
    )
}
