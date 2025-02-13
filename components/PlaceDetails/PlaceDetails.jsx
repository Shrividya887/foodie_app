import React from 'react';
import {Box,Typography,Button, Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';
const PlaceDetails = ({place}) => {
    const classes = useStyles();
  console.log(place);
    return (
        <Card elevation ={6}>
            <CardMedia
                    style={{height:350 }}
                    image={place.photo ? place.photo.images.large.url : 'https://www.pexels.com/search/restaurants/'}
                    title={place.name}
     />
     <CardContent>
        <Typography gutterBottom variant = "h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>

        {place?.address && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                <LocationOnIcon /> {place.address}
            </Typography>
        )}
        <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                  Trip Advisor   
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                  Website   
                </Button>
        </CardActions>
     </CardContent>
        </Card>
    );
}

export default PlaceDetails;

