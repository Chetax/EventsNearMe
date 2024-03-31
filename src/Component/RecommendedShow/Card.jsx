import * as React from 'react';
import Card from '@mui/material/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './download.jpg';
import { Box } from '@mui/joy';

// Function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export default function MediaCard({ items }) {

    const formattedDate = formatDate(items.date);

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                sx={{
                    position: 'relative',
                    height: 140,
                    borderRadius: "25px",
                    width: 350,
                }}
                image={items.imgUrl}
                title="Event Image"
                onError={(e) => console.log("Error loading image:", e.target.src)}
            >
                <Typography
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: '8px',
                        ml: 2,
                        mr: 3,
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: '#ffffff',
                    }}
                    variant="body2"
                >
                    {formattedDate}
                </Typography>
            </CardMedia>

            <CardContent>
                <Typography sx={{ mt: 2 }} gutterBottom variant="body1" fontWeight={'bold'} component="div">
                    {items.eventName}
                </Typography>
                <Typography variant="body2" color="#989090">
                    <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                        <Box display={'flex'} justifyContent={'start'} alignItems={'center'}>
                            <LocationOnIcon />{items.cityName}
                        </Box>
                        <Box display={'flex'} justifyContent={'end'} alignItems={'center'}>
                            {items.weather.replace(/(\d+)C/, "$1°C")} | {items.distanceKm} km
                        </Box>
                    </Box>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
