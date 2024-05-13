import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function Page() {
    return (
        <Container maxWidth="sm" sx={{ width: '100%', maxWidth: 600 }}>

            <Box component="form" action="/api/data" method="post" sx={{ mt: 4, p: 1 }}>
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
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1.2em' // This is a static setting, will be overridden by the sx prop
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#333', // Change the input background color
                                        borderRadius: '10px' // Style the input field with rounded corners
                                    }
                                }}
                                sx={{
                                    width: { xs: '90%', sm: '80%', lg: '70%' }, // Responsive width settings
                                    '& .MuiInputLabel-root': {
                                        fontSize: { xs: '1.7em', sm: '2.3em', lg: '3em' } // Responsive font sizes for the label
                                    },
                                    '& .MuiInputBase-input': {
                                        fontSize: { xs: '0.8rem', sm: '1rem', lg: '1.2rem' } // Responsive font sizes for the input text
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
            </Box>
        </Container>
    )
}

