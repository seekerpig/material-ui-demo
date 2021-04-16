import React from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
import img1 from './MSB-Calendar-2.png';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
    container: {
        backgroundColor: theme.palette.background.paper,
        //backgroundColor: 'transparent',
        padding: theme.spacing(8, 0, 6),
        paddingBottom:'3rem',
    },
    

}));

function LeftContainer() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="md" >
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6} >
                            <Typography variant="h5">Smart Calendar</Typography>
                            <Typography variant="body1">
                                A smart calendar that allows the tutor to showcase open slots,
                                send SMS and email lesson reminders,
                                take attendance,
                                send date proposal and even allow your students to see your opening lesson timings.
                            </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img alt="Calendar" src={img1}></img>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default LeftContainer
