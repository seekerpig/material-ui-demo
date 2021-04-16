import React from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
 
    container: {
        backgroundColor: theme.palette.background.paper,
        //backgroundColor: 'transparent',
        padding: theme.spacing(8, 0, 6),
        paddingBottom:'3rem',
    },
    

}));

function LeftContainer({image,title,subtitle}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="md" >
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6} >
                            <Typography variant="h5">{title}</Typography>
                            <Typography variant="body1">
                                {subtitle}
                            </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                     <img alt={title} src={require(`${image}`).default} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default LeftContainer
