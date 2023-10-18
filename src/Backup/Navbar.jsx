import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useAuth0 } from "@auth0/auth0-react";
import Cookies from 'js-cookie';

const pages = ['Home', 'AboutUs']; // Define your pages
const settings = ['Profile', 'Yourbookings', 'Logout']; // Define your settings

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // Check if the cookie exists
  const isAuth0UserCookieSet = !!Cookies.get('auth0_user_id');

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

  // Log out the user and remove the cookie
  const onLogout = () => {
    Cookies.remove('auth0_user_id');
    // Perform the logout action (e.g., calling Auth0's logout method)
    logout();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FAAB78' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
             
             <Link to="/Home" style={{ textDecoration: 'none', color: 'white' }}>
  <span style={{ fontSize: '18px',display:'inline-block',paddingRight:'35px' }}>
    PAWPRINT
  </span>
</Link>

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
                  <Link to={`/${page}`} style={{ textDecoration: 'none' }}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>

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
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {/* {isAuthenticated ? (
  <Link to="/Yourbookings" style={{ textDecoration: 'none' }}>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
      Yourbookings
    </Button>
  </Link>
// ) : null} */}
<marquee style={{ color: 'white', fontSize: '1.2rem', fontStyle: 'italic',display:'inline-block' }}>
 Visiting hours:-10am to 5pm
 </marquee>

          {/* {isAuthenticated ? (
            <div>
             
            </div>
          ) : (
            <Button 
  style={{
    fontSize: '15px',
     // Change the background color to your preference
    color: 'white', // Change the text color to your preference
    padding: '2px 2px', // Adjust the padding to your preference
    borderRadius: '5px' // Add rounded corners for a better look
  }} 
  onClick={() => loginWithRedirect()}
>
  Log In
</Button> */}

          

{isAuthenticated ? (
  <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Open Menu">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        {user ? (
          <Avatar alt={user.name} src={user.picture} />
        ) : (
          <Avatar alt="Profile" />
        )}
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
    {setting === 'Profile' || setting === 'Yourbookings' ? (
      user ? (
        <Link to={`/${setting}`} style={{ textDecoration: 'none' }}>
          <Button>{setting}</Button>
        </Link>
      ) : (
        <Button>{setting}</Button>
      )
    ) : (
      <Button onClick={() => (setting === 'Logout' ? logout() : null)}>{setting}</Button>
    )}
  </MenuItem>
  
))}

    </Menu>
  </Box>
) : null}

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;