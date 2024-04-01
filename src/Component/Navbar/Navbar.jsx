import React from 'react';
import { Button, Grid } from '@mui/material';
import Search from '../Navbar/Search';
import ReorderIcon from '@mui/icons-material/Reorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

const Events = ["Live Shows", "Streams", "Movie", "Plays", "Events", "Sports", "Activites"];

const Navbar = () => {
  return (
    <Box>
      {/* Large screen navbar */}
      <Box sx={{ '@media(max-width:770px)': { display: "none" ,} }}>
        <Grid container sx={{ pl: 3, pr: 5, pt: 1 ,}}>
          <Grid item xs={2} justifyContent={'flex-start'} sx={{cursor:"pointer"}}>
            <Typography variant="h6" color="error" >BookUsNow</Typography>
          </Grid>
          <Grid item xs={2} md={2} sm={2} sx={{ cursor:"pointer",'@media(max-width:899px)': { mr: 3 } }}>
            <Button variant='contained' sx={{ bgcolor: "#212121", '&:focus': { backgroundColor: "#212121" } }}>
              <ReorderIcon /> <span style={{ paddingLeft: "5px", marginRight: "5px", textTransform: "none" }}>Categories</span>
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={2}>
            <Search sx={{cursor:"pointer"}} />
          </Grid>
          <Grid item xs={3} sm={2} md={3} sx={{ display: 'flex',cursor:"pointer", justifyContent: 'flex-end', mt: 0.5, mr: 5, '@media (max-width:1197px) and (min-width:900px)': { mr: 2 }, '@media (max-width:900px) and (min-width:600px)': { mr: 1 } }}>
            <FavoriteIcon sx={{ color: "grey", }} /> Favorites
          </Grid>
          <Grid item xs={1} sm={2} md={2} sx={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
            <Button variant='outlined' sx={{ color: "grey", ml: 1 }}>Sign in</Button>
          </Grid>
        </Grid>
      </Box>

      {/* Small screen navbar */}
      <Box sx={{ pt: 2, pb: 2, display: "flex", justifyContent: "space-between", '@media (min-width: 770px)': { display: "none" } }}>
        <Box>
          <Typography variant="h6" color="error" sx={{ marginLeft: "8px" }}>BookUsNow<br /></Typography>
          <Typography variant="body1" color="textSecondary" sx={{ display: "flex", alignItems: 'center' }}>
            <LocationOnIcon sx={{ marginRight: 1,cursor:"pointer" }} /> Mumbai,India <ArrowForwardIosIcon fontSize='small' />
          </Typography>
        </Box>
        <Box sx={{ cursor:"pointer", display: "flex", justifyContent: 'space-evenly' }}>
          <SearchIcon sx={{ color: '#989090', paddingRight: 4 }} />
          <FavoriteIcon sx={{ color: '#989090', paddingRight: 4 }} />
          <PersonIcon sx={{ color: '#989090', paddingRight: 4 }} />
        </Box>
      </Box>

      {/* Category section */}
      <Box sx={{ '@media(max-width:770px)': { display: "none" } }}>
        <Grid container sx={{ pl: 2.5, mt: 2, pr: 7, pt: 1, color: "#989090", fontSize: "15px" }}>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start " }} >
            <LocationOnIcon />
            <Typography  sx={{cursor:"pointer"}}variant="body1">Mumbai,India</Typography>
          </Grid>
          <Grid item xs={7} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between  " }} >
            {Events.map((event, index) => (
              <Typography sx={{cursor:"pointer"}} key={index} variant="body1" fontFamily="Inter">{event}</Typography>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* Category section for small screen */}
      <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    overflowX: "auto", // Enable horizontal scrolling
    scrollbarWidth: "none", // Hide scrollbar in Firefox
    "-ms-overflow-style": "none", // Hide scrollbar in IE
    "&::-webkit-scrollbar": {
      display: "none", // Hide scrollbar in WebKit browsers
    },
    '@media (min-width: 770px)': {
      display: "none",
    }
  }}
>
  {Events.map((event, index) => (
    <Typography
      key={index}
      variant="body1"
      fontFamily="Inter"
      sx={{ cursor: "pointer", flexShrink: 0, minWidth: "max-content", pr: 2 }}
    >
      {event}
    </Typography>
  ))}
</Box>

    </Box>
  );
}

export default Navbar;
