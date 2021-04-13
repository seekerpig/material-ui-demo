import React from "react";
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Button,
    InputBase,
} from "@material-ui/core";
import ChildCareIcon from '@material-ui/icons/ChildCare';
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    navTitle: {
        flexGrow: 1,
    },
    icon: {
        marginRight: "20px",
    },

    buttons: {
        marginTop: "40px",
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Container maxWidth="md">
                <Toolbar>
                    <ChildCareIcon className={classes.icon} />
                    <Typography variant="h1" style={{fontSize:"1.5rem"}} color="transparent" className={classes.navTitle}>
                        TutorsDojo
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
