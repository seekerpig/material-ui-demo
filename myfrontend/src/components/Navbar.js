import React from "react";
import {Link} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Button,
    IconButton,
    Divider,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Hidden,
    SwipeableDrawer,
} from "@material-ui/core";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
//import HelpIcon from '@material-ui/icons/Help';
import PaymentIcon from '@material-ui/icons/Payment';

const drawerWidth = 240;
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles((theme) => ({
    navTitle: {
        flexGrow: 20,
    },
    navItems: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
    },
    navHideMobile: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    icon: {
        marginRight: "20px",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },

    buttons: {
        marginTop: "40px",
    },

    loginButton: {
        padding: "0.5rem 1.7rem",
    },

    loginDiv: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
    },

    homeHref: {
        textDecoration: "none",
        color: "inherit",
    },

    menuButton: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "block",
        },
        marginRight: "1rem",
    },

    toolbar: {
        [theme.breakpoints.down("xs")]: {
            paddingTop: "10px",
            paddingBottom: "10px",
        },
    },

    drawerPaper: {
        width: drawerWidth,
    },
}));

function Navbar() {
    const classes = useStyles();
    const [sidebarOpen,setSidebarOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                            
                </ListItem>
                <Divider/>
                <ListItem button component={Link} to="/features">
                    <ListItemIcon>
                        <AppsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Features"/> 
                </ListItem>
                <Divider/>
                <ListItem button component={Link} to="/pricing">
                    <ListItemIcon>
                        <PaymentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pricing"/> 
                </ListItem>
                <Divider/>
                {/*
                <ListItem button component={Link} to="/faq">
                    <ListItemIcon>
                        <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="FAQ"/> 
                </ListItem>
                <Divider/>*/}
                <ListItem button component={Link} to="/contact">
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Contact Us"/> 
                </ListItem>
                <Divider/>
                <ListItem button href="app.tutorsdojo.com">
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Login"/> 
                </ListItem>
                <Divider/>

            </List>
            
        </div>
    );

    return (
        <React.Fragment>
        <AppBar position="relative" color="transparent" elevation={0}>
            <Container maxWidth="md">
                <Toolbar className={classes.toolbar}>
                    <ChildCareIcon className={classes.icon} />
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h1"
                        style={{ fontSize: "1.5rem" }}
                        color="transparent"
                        className={classes.navTitle}
                    >
                        <Link className={classes.homeHref} to="/">
                            TutorsDojo
                        </Link>
                    </Typography>
                    <div className={classes.navItems}>
                        <div className={classes.navHideMobile}>
                            <Button component={Link} to="/features">Features</Button>
                            <Button component={Link} to="/pricing">Pricing</Button>
                            <Button href="app.tutorsdojo.com">Contact</Button>
                            {/*<Button component={Link} to="/faq">FAQ</Button>*/}
                        </div>
                        <div className={classes.loginDiv}>
                                <Button
                                    component={Link}
                                    to="/login"
                                    variant="contained"
                                    color="primary"
                                    className={classes.loginButton}
                                    disableElevation
                                >
                                    Login
                                </Button>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
        <Hidden smUp implementation="css">
        <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
          //container={container}
          variant="temporary"
          anchor="left"
          open={sidebarOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      </React.Fragment>
    );
}

export default Navbar;
