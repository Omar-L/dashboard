import React from "react";

// material
import { Button, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box } from "@mui/system";

function Home() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{ flexDirection: 'column' }} padding="1rem">
            <Typography variant="h1" align="center" sx={{paddingBottom: '2rem'}}>Welcome to the Dashboard</Typography>
            <Button variant="contained" endIcon={<ArrowCircleRightIcon />} href="/dashboard" color="secondary">
                Go to Dashboard
            </Button>
        </Box>
    )
}

export default Home;