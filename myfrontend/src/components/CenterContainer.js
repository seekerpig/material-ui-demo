import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        //backgroundColor: 'transparent',
        //borderTop: `1px solid ${theme.palette.divider}`,
        //borderBottom: `1px solid ${theme.palette.divider}`
    },
    greycontainer: {
        //backgroundColor: 'transparent',
        //borderTop: `1px solid ${theme.palette.divider}`,
        //borderBottom: `1px solid ${theme.palette.divider}`
    },
    imgResize:{
        [theme.breakpoints.down("xs")]: {
            width:"100%",
        },
    },
}));

function CenterContainer({ image, smalltitle, title, subtitle, greycontainer, imgWidth}) {
    const classes = useStyles();
    return (
        
        <div className={greycontainer ? classes.greycontainer : classes.container}>
            <Container maxWidth="md">
                <Grid container spacing={5} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography varant="subtitle1" style={{color:"#007AFF", fontWeight:"500"}}>{smalltitle}</Typography>
                        <Typography variant="h5" style={{marginBottom:"1rem"}}>{title}</Typography>
                        <Typography variant="body1">{subtitle}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img alt={title} src={require(`${image}`).default} width={imgWidth ? imgWidth :"90%"} className={classes.imgResize}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CenterContainer;
