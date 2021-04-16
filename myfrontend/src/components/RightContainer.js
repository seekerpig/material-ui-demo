import React from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
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

function RightContainer({image,title,subtitle}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="md" >
                <Grid container spacing={5} alignItems="center" className={classes.gridreverse}>
                    <Grid item xs={12} md={6}>
                        <img alt={title} src={require(`${image}`).default} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" align="right">{title}</Typography>
                        <Typography variant="body1" align="right">
                            {subtitle}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default RightContainer
