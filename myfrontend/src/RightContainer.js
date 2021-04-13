import React from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
import img2 from './MSB-tablet-2.png';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
    container: {
        backgroundColor: theme.palette.background.paper,
        //backgroundColor: 'transparent',
        padding: theme.spacing(8, 0, 6),
        paddingBottom:'5rem',
    },
    gridreverse:{
        [theme.breakpoints.down('md')]:{
            flexDirection:"column-reverse",
        },
    },

}));

function RightContainer() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="md" >
                <Grid container spacing={5} alignItems="center" className={classes.gridreverse}>
                    <Grid item xs={12} md={6}>
                        <img alt="Calendar" src={img2}></img>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5">Automated Billing</Typography>
                        <Typography variant="body1">
                            Stop fussing over having to ask students for lesson payments,
                            instead, we will help you send payment reminders, invoices and ensure that students complete
                            their payments on time! We even have an analytics for payment, to show outstanding payments,
                            how much you've earnt this month and etc.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default RightContainer
