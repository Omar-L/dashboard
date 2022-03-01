import React from "react";

// material
import { Grid, Typography } from '@mui/material';

// project
import Navigation from "../../components/navigation";

function Home() {
    return (
        <Grid>
            <Grid item>
                <Navigation />
            </Grid>
            <Grid item>
                <h2>Home</h2>
            </Grid>
        </Grid>
    )
}

export default Home;