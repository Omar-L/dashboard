import React, { useState } from "react";

// material
import { Button, Card,CardActionArea,CardActions,CardContent,Grid, Typography } from '@mui/material';

// project
import SearchCountries from "../../components/searchCountries";
import MapChart from "../../components/map/MapChart";
import CountryFacts from "../../components/countryFacts";

function Dashboard() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [population, setPopulation] = useState('');
    
    return (
        <Grid container spacing={3} padding={3}>
            <Grid item xs={12}>
                <Typography variant="h1">World Dashboard</Typography>
                <Typography variant="body1">Welcome to the World Dashboard. Select a country from the list below to learn about it.</Typography>
            </Grid>
            <Grid item xs={12}>
                <SearchCountries selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />  
            </Grid>
            {selectedCountry && (
            <React.Fragment>
                <Grid item xs={12}>
                    <Typography variant="h2">{selectedCountry.name}</Typography>
                    <Typography variant="h3">{selectedCountry.region.value} Region</Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                    <CountryFacts selectedCountry={selectedCountry} population={population} setPopulation={setPopulation} />
                </Grid>
                
                <Grid item xs={12} md={4}>
                    <Card variant={"outlined"}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12} zeroMinWidth>
                                    <MapChart selectedCountry={selectedCountry} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">{selectedCountry.capitalCity}, {selectedCountry.name} on the world map.</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" variant="contained" 
                                        href={`https://google.com/maps/@${selectedCountry.latitude},${selectedCountry.longitude},10z`}
                                        target="_blank"        
                                >
                                    Open on Google Maps
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    
                </Grid>
            </React.Fragment>
            )}
        </Grid>
    )
}

export default Dashboard;