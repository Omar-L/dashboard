import React, { useState, useEffect } from "react";

// material
import { Grid, Typography } from '@mui/material';

// project
import SearchCountries from "../../components/searchCountries";

// axios
const axios = require('axios');


function Dashboard() {
    const [selectedCountry, setSelectedCountry] = useState({});

    const connectTo = async () => {
        try {
            axios.get('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?date=2000&format=json')
            .then((response) => console.log(response.data))
        }
        catch (e) {console.log(e)}
        
    }
    
    
    return (
        <Grid container spacing={3} padding={3}>
            <Grid item xs={12}>
                <SearchCountries setSelectedCountry={setSelectedCountry} />  
            </Grid>
            {selectedCountry && (
            <Grid item>
                <Typography variant="h1">{selectedCountry.name} {selectedCountry.id}</Typography>
            </Grid>            
            )}
        </Grid>
    )
}

export default Dashboard;