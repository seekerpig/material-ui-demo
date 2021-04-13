import React from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PaymentIcon from '@material-ui/icons/Payment';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
    container: {
        //backgroundColor: theme.palette.background.paper,
        //backgroundColor: 'transparent',
        padding: theme.spacing(6, 0, 6),
        margin:'5rem',
        [theme.breakpoints.down('sm')]:{
            padding: theme.spacing(0, 0, 6),
        },
    },

    gridbreak:{
        [theme.breakpoints.down('sm')]:{
            textAlign:'center',
        },
    },
    h1:{
        [theme.breakpoints.down('sm')]:{
            fontSize:"2rem",
            marginBottom:"2rem",
        },
    },

}));

function Pointer3() {

    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Container maxWidth="md">
            <Typography
            className ={classes.h1} 
            variant="h1"
            align="center"
            gutterBottom
            >Designed for single and <br/> multi-tutor businesses</Typography>

            <Grid container spacing={2}>
                <Grid container item xs={12} sm={12} md={4} direction="column" className={classes.gridbreak}>
                    <Grid item>
                        <ScheduleIcon fontSize="large" style={{backgroundColor:'#FFD700', borderRadius:'5px', padding:'1rem',width:'60px', height:'60px'}}/>
                    </Grid>
                    <Grid item><Typography variant="h5" gutterBottom>Schedule Students</Typography></Grid>
                    <Grid item>
                        <Typography variant="body1" >Allow your students to see your open schedule and book as accordingly.</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={4} direction="column" className={classes.gridbreak}>
                    <Grid item>
                        <NotificationsActiveIcon fontSize="large" style={{backgroundColor:'#FFD700', borderRadius:'5px', padding:'1rem',width:'60px', height:'60px'}}/>
                    </Grid>
                    <Grid item><Typography variant="h5" gutterBottom>Reminders</Typography></Grid>
                    <Grid item>
                        <Typography variant="body1" >Never forget a lesson! Automate reminders to send to the students to let them know of lessons the next day!</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={4} direction="column" className={classes.gridbreak}>
                    <Grid itemProp>
                        <PaymentIcon fontSize="large" style={{backgroundColor:'#FFD700', borderRadius:'5px', padding:'1rem',width:'60px', height:'60px'}}/>
                    </Grid>
                    <Grid item><Typography variant="h5" gutterBottom>Automated Payments</Typography></Grid>
                    <Grid item>
                        <Typography variant="body1" >Send payment reminders, see outstanding payments, invoices and payment analytics.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}

export default Pointer3
