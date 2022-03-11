import { useEffect } from 'react';

// material
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/PeopleAlt';

// axios
const axios = require('axios');

function CountryFacts({selectedCountry, population, setPopulation}) {

    // When country selected, get population
    useEffect(() => {
        console.log("Getting a list of populations of a country from the World Bank");
        getPopulation(selectedCountry);
    }, [selectedCountry])

    
    // Population of a Country
    const getPopulation = async (selectedCountry) => {
        try {
            axios.get(`https://api.worldbank.org/v2/country/${selectedCountry.id}/indicator/SP.POP.TOTL?format=json`)
                // .then((response) => {setPopulation(response.data[1]); console.log(response.data[1])})
                .then((response) => (setPopulation(response.data[1])))
        }
        catch (e) {console.log(e)}        
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <StarIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={selectedCountry.capitalCity} secondary="Capital City" />
                </ListItem>

                <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={selectedCountry.incomeLevel.value} secondary="Income Level" />
                </ListItem>

                <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <PeopleIcon />
                    </Avatar>
                </ListItemAvatar>

                {population && (
                <ListItemText primary={population[0].value} secondary={`Population as of ${population[0].date}`} />)
                }
                </ListItem>
        </List>
    );
}

export default CountryFacts;