import React from "react";
import { Typography, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles((theme) => ({
    buttons: {
        marginTop: "40px",
    },
    container: {
        //backgroundColor: theme.palette.background.paper,
        backgroundColor: 'transparent',
        padding: theme.spacing(15, 0, 0),
        [theme.breakpoints.down('md')]:{
            padding: theme.spacing(5, 0, 5),
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
                    style={{fontWeight:800}}
                    
                >
                    Automate & <br></br>Manage Students
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    The #1 tutor management software for private tutors, tutoring centers and test prep centers. 
                    Manage your students, schedule, billing, online tutoring and much more! <br/><br/>Whatever your goal, we can help.
                </Typography>
                <div className={classes.buttons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Get Started (Free)
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" endIcon ={<ArrowRightIcon/>}>
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
