import React from "react";

// material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, capitalize, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';

// reach router
import { Link, useLocation } from "@reach/router";

export default function Navigation() {
    const location = useLocation();   

    // if not '/' then set pageTitle as pathname
    let pageTitle;
    if(location.pathname !== '/') {
        pageTitle = location.pathname.split('/').pop();
    } else pageTitle = "Home"

    // nav menu controls
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
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
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
    >
        <MenuItem component={Link} to="/">Go Home</MenuItem>
    </Menu>
    </React.Fragment>
    );
}
