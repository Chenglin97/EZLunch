import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import NavBar from '../components/Navbar';
import imageBenefit from '../assets/imageBenefit.png'

const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        
        {/* Introduction Section */}
        <Box textAlign="center" p={4}>
          <Typography variant="h2" gutterBottom>Welcome to EZLunch</Typography>
          <Typography variant="h6">Enjoy AI-recommended, restaurant-made lunches delivered to you!</Typography>
        </Box>

        <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        p={4}
        sx={{
          backgroundImage: `url(${imageBenefit})`,
          backgroundSize: 'cover',  // or 'contain' based on your preference
          backgroundPosition: 'center',
          width: 600,  // Adjust the width as necessary
          height: 600,     // Adjust the height as necessary
        }}
      ></Box>
        {/* Features or Benefits Section */}
        <Box textAlign="center" p={4}>
          <Typography variant="h4" gutterBottom>Why Choose EZLunch?</Typography>
          {/* List features or benefits here */}
        </Box>

        {/* How It Works Section */}
        <Box textAlign="center" p={4}>
          <Typography variant="h4" gutterBottom>How EZLunch Works</Typography>
          {/* Steps or process explanation */}
        </Box>

        {/* Call to Action Section */}
        <Box textAlign="center" p={4}>
          <Button variant="contained" color="primary" size="large">Get Started</Button>
        </Box>

      </Box>
    </>
  );
};

export default HomePage;
