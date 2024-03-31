import { Button, Grid, TextField } from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Search from '../Navbar/Search';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/joy';
const Events=["Live Shows","Streams","Movie","Plays","Events","Sports","Activites"];
function Navbar() {
  return (
    <Box>
      <Box sx={{'@media(max-width:770px)':{display:"none"}}}>
      <Grid container sx={{ pl: 3, pr: 5, pt: 1 }}>
        <Grid item xs={2} justifyContent={'flex-start'}>
          <span style={{ color: "red", fontSize: "20px" }}>BookUsNow</span>
        </Grid>
        <Grid item xs={2} md={2} sm={2} sx={{ '@media(max-width:899px)':{mr:3}}}>
          <Button variant='contained' sx={{ bgcolor: "#212121", '&:focus': { backgroundColor: "#212121" } }}>
            <ReorderIcon /> <span style={{ paddingLeft: "5px",marginRight:"5px", textTransform: "none" }}>Categories</span>
          </Button>
        </Grid>
        <Grid item xs={3} sm={3} md={2} sx={{'@media(min-width:)':{}}}>
          <Search />
        </Grid>
        <Grid item xs={3} sm={2}  md={3} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5,mr:5,'@media (max-width:1197px) and (min-width:900px)':{mr:2},'@media (max-width:900px) and (min-width:600px)':{mr:1}}}>
          <FavoriteIcon sx={{ color: "grey" }} /> Favorites
        </Grid>
        <Grid item xs={1} sm={2} md={2} sx={{display:"flex",justifyContent:'center',alignItems:"center"}}>
          <Button variant='outlined' sx={{ color: "grey",ml:1 }}>Sign in</Button>
        </Grid>
      </Grid>
      </Box>
      <Box  sx={{ pt:2,pb:2, display:"flex",justifyContent:"space-between", '@media (min-width: 770px)': {  display: "none" }}}>
  <Box >
    <span style={{ color: "red", fontSize: "20px",marginLeft:"8px"}}>BookUsNow<br /></span> 
    <Typography  sx={{display:"flex",color:'#989090',alignItems:"center",justifyContent:"flex-start "}} >
          <LocationOnIcon />
          <span  style={{display:'flex',justifyContent:'center',alignItems:"center"}}>Mumbai,India <ArrowForwardIosIcon fontSize='small'/></span>
        </Typography>
  </Box>
  <Box sx={{display:"flex" ,justifyContent:'space-evenly',}}>
    <SearchIcon sx={{color:'#989090',pr:4}}/>
    <FavoriteIcon sx={{color:'#989090',pr:4}}/>
    <PersonIcon sx={{color:'#989090',pr:4}}/>
  </Box>
</Box>
<Box sx={{'@media(max-width:770px)':{display:"none"}}}>
      <Grid container sx={{ pl: 2.5,mt:2, pr: 7, pt: 1,color:"#989090",fontSize:"15px" }}>
        <Grid item xs={3}  sx={{display:"flex",alignItems:"center",justifyContent:"flex-start "}} >
          <LocationOnIcon />
          <span >Mumbai,India</span>
        </Grid>
        <Grid item xs={7} sx={{display:"flex",alignItems:"center",justifyContent:"space-between  "}} >
          {Events.map((event)=>(
      <span style={{fontFamily:"Inter"}}>{event}</span>
          ))}
        </Grid>

      </Grid>
</Box>

<Box  sx={{  display:"flex",justifyContent:"space-between", '@media (min-width: 770px)': {  display: "none" }}}>
<Grid container sx={{ pl: 2.5,mt:2, pr:2,color:"#989090",fontSize:"15px" }}>
        <Grid item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"space-between  "}} >
          {Events.map((event)=>(
      <span style={{fontFamily:"Inter"}}>{event}</span>
          ))}
        </Grid>

      </Grid>
</Box>



        </Box>

  );
}

export default Navbar;
