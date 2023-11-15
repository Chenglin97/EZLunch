// NavBar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
// import { useSelector } from 'react-redux';

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href="/">EZLunch</a>
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit" href="/">Home</Button>
            {/* {isLoggedIn ? ( */}
            {false?(
              <Button color="inherit" href="/profile">My Profile</Button>
            ) : (
              <Button color="inherit" href="/login">Login</Button>
            )}
          </>
        )}
        {isMobile && (
          <Typography variant="body1">Menu</Typography>
          // Future implementation: Dropdown or slide menu for mobile view
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
