import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

// axios
const axios = require('axios');

function SearchCountries({setSelectedCountry}) {
    const [countries, setCountries] = useState([]);

    // get list of countries from World Bank
    useEffect(() => {
        console.log("Getting list of countries and regions from the World Bank");
        getCountries();
    }, [])

    const getCountries = async () => {
        try {
            axios.get('https://api.worldbank.org/v2/country/all?per_page=299&format=json')
                .then((response) => setCountries(response.data[1]))
        }
        catch (e) {console.log(e)}        
    }

    return (
        <Autocomplete 
            fullWidth
            options={countries}
            getOptionLabel={(option) => option.name}
            renderInput={(countries) => <TextField {...countries} label="Countries and Regions" />}
            onChange={(event, value) => (setSelectedCountry(value))}
        />
    );
};

export default SearchCountries;