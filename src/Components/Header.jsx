import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router";

const Header = () => {
    // Hookes starts
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    // Hooks end

    // Custom hooks

    // Custom hooks ends

    // Functions
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    // Functions ends


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    component="nav"
                    sx={{ backgroundColor: theme.palette.custom.headerBackground }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{ color: '#fff' }} component={Link} to="/" >
                                Home
                            </Button>
                            <Button sx={{ color: '#fff' }} component={Link} to="/about">
                                About
                            </Button>
                            <Button sx={{ color: '#fff' }} component={Link} to="/contact">
                                Contact
                            </Button>
                            {/* <Button onClick={handleClick} sx={{ color: '#fff' }}>
                                Dark/Light
                            </Button> */}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "240px" },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
        </>
    )
}

export default Header