import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

// axios
const axios = require('axios');

function SearchCountries({setSelectedCountry}) {
    const [countries, setCountries] = useState([]);
    
    // On page load, get list of countries from World Bank
    useEffect(() => {
        console.log("Getting list of countries and regions from the World Bank");
        getCountries();
    }, [])

    // Create a list of Countries
    const getCountries = async () => {
        try {
            axios.get('https://api.worldbank.org/v2/country/all?per_page=299&format=json')
                .then((response) => setCountries(response.data[1]))
        }
        catch (e) {console.log(e)}        
    }

    // filter countries where the region is 'aggregate' thus not a country
    const filteredCountries = countries.filter((country) => country.region.value !== 'Aggregates')

    return (
        <Autocomplete 
            fullWidth
            options={filteredCountries}
            getOptionLabel={(option) => option.name}
            renderInput={(filteredCountries) => <TextField {...filteredCountries} label="Countries" />}
            onChange={(event, value) => setSelectedCountry(value)}
        />
    );
};

export default SearchCountries;