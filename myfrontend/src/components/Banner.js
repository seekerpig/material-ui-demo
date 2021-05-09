import React from "react";
import { Typography, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    buttons: {
        marginTop: "40px",
    },
    container: {
        //backgroundColor: theme.palette.background.paper,
        backgroundColor: "transparent",
        padding: theme.spacing(15, 0, 0),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(5, 0, 5),
        },
    },
    bannerBody: {
        fontSize: "1.0rem",
        [theme.breakpoints.up("md")]: {
            fontSize: "1.2rem",
        },
    },
}));

function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="md">
                <Typography
                    variant="h1"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    style={{ fontWeight: 800 }}
                >
                    Automate & <br></br>Manage Students
                </Typography>
                <Container maxWidth="md">
                    <Typography
                        variant="body1"
                        align="center"
                        className={classes.bannerBody}
                        paragraph
                    >
                        The #1 Tutor management software for freelance tutors,
                        tuition centres and schools. Automate attendance,
                        schedule, billing, online tutoring and much more! <br />
                        <br />
                        Let us help you manage, so that you can just focus on
                        teaching.
                    </Typography>
                </Container>

                <div className={classes.buttons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary" component={Link} to="/pricing">
                                Get Started (Free)
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowRightIcon />}
                                component={Link}
                                to="/pricing"
                            >
                                Demo
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default Banner;
