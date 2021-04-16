import React from "react";
import {Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme)=>({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: "50px 0",
	  }
}));

function Footer() {
	const classes = useStyles();
    return (
        <footer className={classes.footer}>
            {/*<Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>*/}
            <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
            >
                © Copyright 2021 - TutorsDojo Inc.
            </Typography>
        </footer>
    );
}

export default Footer;
