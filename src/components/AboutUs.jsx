import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Avatar, TextField } from '@mui/material';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company Name
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      
      <Container>
        <Typography variant="h2">About Us</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet ante vel nulla cursus tincidunt.
        </Typography>

        <Typography variant="h2">Our Team</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card>
              <Avatar src="/path-to-avatar.jpg" />
              <CardContent>
                <Typography variant="h6">Team Member Name</Typography>
                <Typography variant="body2">Position</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more team members here */}
        </Grid>

        <Typography variant="h2">Contact Us</Typography>
        <form>
          <TextField label="Name" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default App;