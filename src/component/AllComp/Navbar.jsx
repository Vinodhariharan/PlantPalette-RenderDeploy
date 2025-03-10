import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';
import { Container, IconButton, InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';import '../../assets/css/Navbar.css';
import CartDrawer from './CartDrawer';
import { Search } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Input, Textarea } from '@mui/joy';
import { StyledInputEndDecorator } from '@mui/joy/Input/Input';

const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  return (
    <AppBar position="fixed" className="navbar" sx={{backgroundColor:'#0A4938'}}>
        <Container>
      <Toolbar className="toolbar">
        <Typography variant="h6" component="div" fontFamily="Duru Sans, sans-serif;" sx={{color:'white'}}>
          <Link to="/"><b >The Plant Palette</b></Link>
        </Typography>
        <div className="spacer" />
        {/* <StyledInputEndDecorator sx={{borderRadius:'20px'}} placeholder='Search' variant="plain" /> */}
        <Input
        sx={{ borderRadius:'20px'}}
        placeholder="Search"
        variant="plain"
        disabled 
          // inputProps={{ 'aria-label': 'search google maps' }}
        endDecorator={<IconButton type="button">
        <Search />
      </IconButton>}
      />
      
        <div className="nav-links" sx={{fontFamily:'League Spartan, sans-serif'}}>

          <Button color="inherit" sx={{fontFamily:'League Spartan, sans-serif'}} component={Link} to="/" className="nav-link">
            Home
          </Button>
          <Button color="inherit" sx={{fontFamily:'League Spartan, sans-serif'}} component={Link} to="/about" className="nav-link">
            About
          </Button>
          {isLoggedIn ? (
            <Button endDecorator={<LogoutIcon />} color="danger" sx={{fontFamily:'League Spartan, sans-serif',borderRadius:'20px',margin:'10px'}} onClick={() => setLoggedIn(false)} className="nav-link login-button">
              Logout
            </Button>
          ) : (
            <Button endDecorator={<LoginIcon />} color="primary" sx={{fontFamily:'League Spartan, sans-serif',borderRadius:'20px',margin:'10px'}} component={Link} to="/login" className="nav-link login-button">
              Login
            </Button>
          )}
        </div>
        <CartDrawer/>
      </Toolbar>
        </Container>
    </AppBar>
  );
};

export default Navbar;
