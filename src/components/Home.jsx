import React, { useState } from 'react'; // Import useState from React
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import './Home.css';
import { FormLabel } from '@chakra-ui/react';

// const pages = ['Home', 'AboutUs', 'Mybookings']; // Define your pages
// const settings = ['Profile','Logout']; // Define your settings

const styles = {
  backgroundColor: '#E8F3D6',
  padding: '1rem',
};

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
  backgroundColor: '#E8F3D6',
});

const Home = () => {
  const [anchorElNav, setAnchorElNav] = useState(null); // Use useState for state variables
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (<>
    <div>
      {/* <AppBar position="static" sx={{ backgroundColor: '#FAAB78' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PAWPRINT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={'/${page}'} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PAWPRINT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} to={`/${page}`} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Jay" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar> */}
      <div class="jumbotron jumbotron-fluid">
        <div class="container text-center">
          <h1 class="display-4">WELCOME TO PAWPRINT</h1>
          <p class="lead">The best pet daycare and grooming service in town.</p>
          <Link class="btn btn-primary btn-lg" to="/Booking" role="button">Book Now</Link>
        </div>
      </div>
    </div><div class="container py-4" style={styles}>
      <h1 class="text-center">Our Services</h1>
      <h3 class="text-center1">We offer a variety of services to meet your pet's needs.</h3>
      <CardContainer sx={{ py: 1 }}><Marquee >
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
            </Typography><Link class="btn btn-primary btn-lg" to="/Booking" role="button">Book Now</Link>
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
            </Typography><Link class="btn btn-primary btn-lg" to="/Booking" role="button">Book Now</Link>
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
            </Typography><Link class="btn btn-primary btn-lg" to="/Booking" role="button">Book Now</Link>
            <Typography variant="body2" color="text.secondary">
              We offer comfortable and cozy accommodations for your pet to stay overnight or longer.
              We also provide daily walks and meals.
            </Typography>
          </CardContent>

        </Card></Marquee></CardContainer></div>
        
        
        
        
     <Typography
     style={{ backgroundColor: '#E8F3D6', color: 'black', fontSize: '2rem', textAlign: 'center' }}>Review Section</Typography>
    <CardContainer sx={{ py: 1 }} >
      
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

    <footer class="bg-dark text-white py-3">
      <div class="container text-center">

        <p>© 2023 PAWPRINT. All rights reserved.</p>
        <p>Follow us on social media:</p>

        <a href="https://www.instagram.com/jay_uchagaonkar/" class="text-white mx-2"><i class="fab fa-facebook-f"></i>@Jay</a>
        <a href="https://www.instagram.com/reallyaditishirke/" class="text-white mx-2"><i class="fab fa-twitter"></i>@Aditi</a>
        <a href="https://www.instagram.com/danielthatu/" class="text-white mx-2"><i class="fab fa-instagram"></i>@Daniel</a>
        <a href="instagram.com/hey.vimal/" class="text-white mx-2"><i class="fab fa-instagram"></i>@Vimal</a>
      </div>
    </footer>
  </>
  )
}

export default Home;