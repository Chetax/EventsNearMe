import { Grid, Container, Typography } from '@mui/material';
import Card from './Card';
import { useEffect, useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Loader from './Loader';

function ImageList() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming");
                if (!response.ok) {
                    console.log("Error Occurred During Data Fetching");
                    return;
                }
                const responseData = await response.json();
                setEvents(responseData.events.map(event => ({
                    ...event,
                    imgUrl: convertImgUrl(event.imgUrl), 
                    distanceKm: convertToKilometers(parseFloat(event.distanceKm)) 
                })));
                setLoading(false);
            } catch (err) {
                console.log("Error: ", err);
            }
        };
        fetchData();
    }, []);

    const convertImgUrl = (url) => {
        const fileIdMatch = url.match(/\/file\/d\/([^/]+)\/.*/);
        if (fileIdMatch) {
            const fileId = fileIdMatch[1];
            return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
        }
        return url;
    };

    const convertToKilometers = (distance) => {
        return (distance / 1000).toFixed(2); // Convert meters to kilometers and round to 2 decimal places
    };

    return (
        <Container sx={{pt:5}}>
       <Container sx={{display:"flex",justifyContent:'space-between',alignItems:"center",pb:2}}>
             <Typography sx={{ pl: 7 ,cursor:'pointer',display:"flex",justifyContent:'center',alignItems:"center"}} variant="h5" color="#1E2022" >Upcomming events <ArrowRightAltIcon /></Typography>
             <Typography sx={{textDecoration:"underline"}}> See All</Typography>
       </Container>
           {loading ? <Loader /> :
                <Grid container spacing={2} justifyContent="center" alignContent="center">
                   
                    {events.map((event, index) => (
                        <Grid item key={index}>
                            <Card index={index} items={event} />
                        </Grid>
                    ))}
                </Grid>
            }
        </Container>
    );
}

export default ImageList;
