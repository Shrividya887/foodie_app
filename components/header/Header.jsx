import React from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';

const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    HERE Food Delivery App 
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <LoadScript
                        googleMapsApiKey="AIzaSyAqSkiV-KeJvDPLyV-q_usMkDtCTlqvE6o"
                        libraries={['places']} // Specify the 'places' library
                    >
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search..."
                                    classes={{ root: classes.inputRoot, input: classes.inputInput }}
                                />
                            </div>
                        </Autocomplete>
                    </LoadScript>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
