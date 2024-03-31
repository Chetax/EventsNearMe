import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from "react";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import Loader from './Loader';
import img from './download.jpg';
import { Grid } from '@mui/joy';

export default function CarouselRatio() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');

        if (!response.ok) {
          throw new Error('Failed to Fetch the data');
        }    

        const data = await response.json();
        
        // Format the image URLs and convert distance to kilometers
        const formattedEvents = data.events.map(event => ({
          ...event,
          imgUrl: convertImgUrl(event.imgUrl),
          formattedDate: formatDate(event.date), // Add formatted date
          distanceKm: convertToKilometers(event.distanceKm) // Convert distance to kilometers
        }));
        
        setEvents(formattedEvents);
        setLoading(false); 
      } catch (err) {
        console.log('Error In Fetching Data', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);  

  const convertImgUrl = (url) => {
    const fileIdMatch = url.match(/\/file\/d\/([^/]+)\/.*/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      console.log(fileId);
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    }
    return url;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const convertToKilometers = (distance) => {
    return (distance / 1000).toFixed(2); // Convert meters to kilometers and round to 2 decimal places
  };

  return (   
    loading ? (
      <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "center", width: "100vw" }}> <Loader /> </Box>
    ) : (
      <Box
        sx={{ display: 'flex', gap: 2, pl:1,pr:15, mb:5, overflow: 'auto', scrollSnapType: 'x mandatory', '& > *': { scrollSnapAlign: 'center' }, '::-webkit-scrollbar': { display: 'none' } }}
      >
        {events.map((item) => (
              
          <Box key={item.eventName} sx={{ position: 'relative', minWidth: 300 }}>
            <AspectRatio ratio="1" variant="plain">
              <img
                style={{ padding: 0 }}
                placeholder="blur"
                srcSet={item.imgUrl}
                src={item.imgUrl}
                alt={item.eventName}
              />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, color: '#fff', padding: '15px' }}>
            
                <Typography variant="body2" color="#989090">
                <Box sx={{ display: "flex", justifyContent: 'space-between' ,alignItems:'center'}}>
                        <Box display={'flex'} fontSize={'17px'}  justifyContent={'start'} alignItem={'center'}>
                         <Typography sx={{pl:1,pr:2} }>   {item.eventName}</Typography>
                        </Box>
                        <Box display={'flex'} fontSize={'12px'} sx={{pr:0.5}} justifyContent={'end'} alignItem={'center'}>
                            {formatDate(item.date)}
                        </Box>
                    </Box>
                </Typography>
                <Typography variant="body2" color="#989090">
                    <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                        <Box display={'flex'} fontSize={'14px'} justifyContent={'start'} alignItem={'center'}>
                            <LocationOnIcon fontSize='small' />{item.cityName}
                        </Box>
                        <Box display={'flex'} fontSize={'14px'} sx={{pr:1}} justifyContent={'end'} alignItem={'center'}>
                            {item.weather.replace(/(\d+)C/, "$1°C")} | {item.distanceKm} km
                        </Box>
                    </Box>
                </Typography>
           
              </Box>
            </AspectRatio>
          </Box>
        ))}
      </Box>
    )
  );
}
