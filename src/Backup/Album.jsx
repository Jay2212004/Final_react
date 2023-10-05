import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Marquee from "react-fast-marquee";

const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    backgroundColor: '#E8F3D6', 
});
const styles = {
  
      backgroundColor: '#E8F3D6', // Set the background color here
      padding: '1rem', // Add padding as needed
   
  };
export default function MediaCard() {
  return (<>
  <div class="container py-4"style={styles}>
                <h2 class="text-center">Our Services</h2>
                <p class="text-center">We offer a variety of services to meet your pet's needs.</p>
                <CardContainer sx={{py:1}}><Marquee >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
         component="img" // Specifies that the media is an image
         alt="Daycare"
         height="250" // Specify the height of the image
         image="https://www.revelationpets.com/hs-fs/hubfs/istockphoto-1432561287-612x612.jpg?width=500&height=333&name=istockphoto-1432561287-612x612.jpg" // Replace with the actual path to your image
         title="Daycare"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Daycare
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We provide a safe and fun environment for your pet to play and socialize with other pets while you are away.
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img" // Specifies that the media is an image
        alt="Grooming"
        height="250" // Specify the height of the image
        image="https://media.istockphoto.com/id/1393558296/photo/dog-taking-bath-at-home-n.jpg?s=612x612&w=0&k=20&c=PZD3P1wHTkUN7AJifSoFqGuyYOgs1bDkVE45j7rLPR4=" // Replace with the actual path to your image
        title="Grooming"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Grooming
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We provide professional grooming services for your pet, including bathing, brushing, trimming, nail clipping, and more.
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img" // Specifies that the media is an image
        alt="Boarding"
        height="250" // Specify the height of the image
        image="https://mymodernmet.com/wp/wp-content/uploads/2020/11/doggie-daycare-puppy-spring-15.jpg" // Replace with the actual path to your image
        title="Boarding"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Boarding
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We offer comfortable and cozy accommodations for your pet to stay overnight or longer.
         We also provide daily walks and meals.
        </Typography>
      </CardContent>
     
    </Card></Marquee></CardContainer></div>
    </>
  );
}
