import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import { useState } from 'react';
import { Divider, Drawer } from '@mui/material';
import "./Header.css";
import Logo from "./images/logo.svg"
function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1 ,my:2}}>
            <img src={Logo} alt="logo" height={'70'} width={'200'}/>
            </Typography>
            <Divider/>
            <ul className='mobile-navigation'>
                <li>
                    <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label='open drawer'
                            edge='start'
                            sx={{ mr: 2, display: { sm: "none" } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            <NavLink to={'/'} ><img src={Logo} alt="logo" height={'70'} width={'250'}/></NavLink>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer
                        variant='temporary'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' },"& .MuiDrawer-paper":{boxSizing:'border-box',width:'240px'}}}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                  <Toolbar/>
                </Box>
                
            </Box>
        </>
    );
}

export default Header;
