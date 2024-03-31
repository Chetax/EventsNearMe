import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/joy";
import banner from './Banner.svg';
import Recommended from "../RecommendedShow/Recomended";
function Banner() {
  const theme = useTheme();

    return (
        <Box sx={{ position:'relative',width: "100%",
        height: "100vh",}}>
        <Box sx={{
            mt: 3,
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "80vh",
            pb: 5,
            mb: 5,
           
        }}>
            <Typography  variant={theme.breakpoints.between('md', 'lg') ? 'h3' : theme.breakpoints.between('sm', 'md') ? 'body1' :
        'h4'} sx={{ textAlign: "center", lineHeight: "12vh", pl: 5, pr: 7, pt: 10, color: "white" ,'@media (max-width:1021px) and (min-width:900px)': { lineHeight: '8vh'},'@media (max-width:900px) and (min-width:600px)': { lineHeight: '6vh',fontSize:"40px"},'@media (max-width:600px)': { lineHeight: '5vh',fontSize:"25px"}}}>
                Discover Exciting Events Happening<br/> Near You - Stay Turned For Update
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", pl: 18, pr: 18, pt: 8, color: "white" ,'@media (max-width:600px) ':{pt:8,pl:3,pr:3}}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Maiores, sed! Quo eum enim exercitationem ex dolores laborum ad, minima numquam.
            </Typography>
            <Box sx={{ position: "absolute", top: "70%", zIndex: 1,background: "rgba(255, 255, 255, 0.1)", width: "100%" }}>
  <Recommended />
</Box>



        </Box>
        </Box>
    );
}

export default Banner;
