import { Box, Container, Typography } from "@mui/material";
import ImageList from './UpcommingEvent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Carousel from './Carousel';
function Recommended() {
  
    return (
        <Container sx={{pt:4}}>
        <Typography sx={{ pl: 7 ,cursor:'pointer'}} variant="h5" color="white" >Recommended Shows <ArrowRightAltIcon /></Typography>
        <Carousel /> 
      <ImageList/>
    </Container>
    
    );
}

export default Recommended;
