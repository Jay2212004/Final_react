import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    backgroundColor: '#E8F3D6'
});

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CardContainer sx={{ py: 4 }} >
            {[1].map((cardIndex) => (
                <Card key={cardIndex} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                J
                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="Review1"
                        subheader="September 9, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1pxgbfwBaX59yl-T4CEQ0LkL7mL2EMoGqfFIRj_qZmJNsps5tBSfD5TF_hJuG8ZENNg&usqp=CAU"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Rating: ⭐⭐⭐⭐⭐ (5/5)
                            This pet care center is exceptional! The staff is caring and knowledgeable,
                            and the facilities are spotless. I've used their grooming and daycare services,
                            and my pet always comes back happy and healthy. Highly recommended!

                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
            {[1].map((cardIndex) => (
                <Card key={cardIndex} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                V
                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="Review2"
                        subheader="September 19, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BHtBH-1n4uje1qVCotaYzK5WWl9DCSa4S-7mAbx3x4HzaQvVtoqO2017yguE8RE7Bas&usqp=CAU"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Rating: ⭐⭐⭐⭐ (4/5)
                            I couldn't be happier with the care my dog receives here. 
                            The grooming service leaves my dog looking fabulous, and the daycare is a godsend for his energy levels. The friendly and attentive staff make the experience even better. I wholeheartedly recommend this pet care center.


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
            {[1].map((cardIndex) => (
                <Card key={cardIndex} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="Review3"
                        subheader="September 29, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTvepi2bqn354r6zf8YfbheeNz-hQOWJBnUD9U6VvB9NseU3549zF4zGuG_8n9IhCQfA&usqp=CAU"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Rating: ⭐⭐⭐⭐⭐ (5/5)
                            Our pet's safety and happiness are paramount, and this center delivers on both fronts.
                             We've utilized their boarding services on numerous occasions, and every time, our hamster comes home relaxed and content. The staff's dedication and passion are truly commendable.


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
            {[1].map((cardIndex) => (
                <Card key={cardIndex} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="Review4"
                        subheader="September 30, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvpxk-_22Xd7Eh2U7j9xenekfokGREFiDHDBjkmraUI1HXosp1Dylyqifgw8GLcZN8es&usqp=CAU"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Rating: ⭐⭐⭐⭐ (4/5)
                            Leaving my cat here is stress-free because I know they're in capable hands. The staff's dedication to the well-being of animals is evident in everything they do. Their grooming services are top-notch, and my pet always looks stunning. This center is a true lifesaver for pet owners.



                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
            {[1].map((cardIndex) => (
                <Card key={cardIndex} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="Review5"
                        subheader="September 9, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmzOdygcM9H-hQ-t_kayJ4FmPclKtM0LSp8yz8jXu6pzz4IZ2pS8hv04lLN_EfNKqAF0&usqp=CAU"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Rating: ⭐⭐⭐⭐ (4/5)
                            Cleanliness and safety are paramount to me when choosing a pet care center. This place exceeds all my expectations. The kennels and play areas are impeccably clean, and the staff follows strict safety protocols. I can't ask for more peace of mind when leaving my dog here.


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
            {[1].map((cardIndex) => (
                <Card key={cardIndex} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="Review6"
                        subheader="September 9, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbiH1AyDGHHSG6O2rDe2Fb5H9zcePby9prAhrf3zTs7OCPRh-zuHYAJaRYhwjBtDQMXA&usqp=CAU"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Rating: ⭐⭐⭐ (3/5)
                            I appreciate that this pet care center offers quality services at reasonable prices. It's clear they prioritize the well-being of the animals over profits, and that's something I can get behind.


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography paragraph></Typography>
                            <Typography></Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </CardContainer>
    );
}
