import React from "react";
import { Typography, Container, Grid, Link, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      },
    
    footerDiv:{
        backgroundColor: theme.palette.background.paper,
      },  
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        },
      },
      
}));
const footers = [
    {
      title: 'Company',
      description: [{title:'Home',link:'/'}, {title:'Pricing',link:'/pricing'}, {title:'Contact Us',link:'/contact'}, {title:'Get Started',link:'https://app.tutorsdojo.com'}],
    },
    {
      title: 'Features',
      description: [{title:'Overview',link:'/features/overview'}, {title:'Student Management',link:'/features/keeptrackofstudents'}, {title:'Calender Scheduling',link:'/features/automaticreminders'}, {title:'Automatic Reminder',link:'/features/calendarscheduling'}, {title:'Online Payments',link:'/features/onlinepayments'}],
    },
  ];
  

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://tutorsdojo.com/">
          TutorsDojo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footerDiv}>
            {/*<Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
            >
                © Copyright 2021 - TutorsDojo Inc.
            </Typography>*/}
            <Container
                maxWidth="md"
                component="footer"
                className={classes.footer}
            >
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                gutterBottom
                            >
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item.link}
                                            variant="subtitle2"
                                            style={{fontSize:'0.9rem', fontWeight:'400'}}
                                            color="textSecondary"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}

export default Footer;
