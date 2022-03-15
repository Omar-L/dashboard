import React, { useState } from "react";

// material
import { Button, Card,CardActionArea,CardActions,CardContent,Grid, Typography } from '@mui/material';

// project
import SearchCountries from "../../components/searchCountries";
import MapChart from "../../components/map/MapChart";
import CountryFacts from "../../components/countryFacts";



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatNumber } from "../../utils/formatNumber";
import PopulationChart from "../../components/PopulationChart";

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
{/* 
                <Grid item>
                {population && (
                        <ul>
                            {population.map((pop, index) => (
                                <li key={index}>{pop.date} - {pop.value}</li>
                            ))}
                        </ul>
                    )}
                </Grid> */}

                
                {population && (
                <>
                
                <Grid item xs={12}>
                    <Grid mb={2}>
                        <Typography variant="h5">Population of {selectedCountry.name}</Typography>
                        <Typography variant="subtitle" color="secondary">Since {population[49].date}</Typography>
                    </Grid>

                <PopulationChart population={population} />

                </Grid>
                <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="Population in Table Form">
                        <TableHead>
                        <TableRow>
                            <TableCell>Year</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {population.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{formatNumber(row.value)}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
                </>
                )}
                
            </React.Fragment>
            )}
        </Grid>
    )
}

export default Dashboard;