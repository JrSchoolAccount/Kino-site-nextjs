import { Box, Typography } from "@mui/material";

export default function Page() {
          return (
                    <Box sx={{
                              display: 'flex',      
                              justifyContent: 'center', 
                              alignItems: 'center'
                    }}>
                              <Typography variant="h6" sx={{ mt: 10 }}>
                                        Tack för att du skickade en recension!
                              </Typography>
                    </Box>
          )
}