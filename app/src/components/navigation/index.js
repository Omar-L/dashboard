import React from "react";

// material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, capitalize } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

// reach router
import { useLocation } from "@reach/router";

export default function Navigation() {
    const location = useLocation();
    let pageTitle;

    // if not '/' then set pageTitle as pathname
    if(location.pathname !== '/') {
        pageTitle = location.pathname.split('/').pop();
    } else pageTitle = "Home"

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize' }}>
                    {pageTitle}                
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
    );
}
