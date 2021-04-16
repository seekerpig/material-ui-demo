import React from 'react'
import './App.css';
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline,Grid, Toolbar, Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';

import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((props) => ({
    container:{
        backgroundColor: props.palette.background.paper,
        padding: props.spacing(8,0,6),
    },

    icon:
    {
        marginRight:'20px',
    },

    buttons:{
        marginTop: '40px',
    },
    cardGrid:{
        padding:'20px 0',
    },
    card:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia:{
        paddingTop: '56.25%' // aspect ratio of 16:9
    },
    cardContent:{
        flexGrow:'1',
    },

    footer:{
        backgroundColor: props.palette.background.paper,
        padding: '50px 0'
    },
}));

const cards = [1,2,3,4,5];


function App() {

    const classes = useStyles();
    const [weather, setWeather] = React.useState({'name':'yet to be retrieved', main:{temp:'undefined'}});
    
    React.useEffect(() =>{
        document.title=`Current weather is : ${weather.name}.`
    });
    
    React.useEffect(() => {
        fetch('/getWeathersingapore')
            .then(res => res.json())
            .then((res)=> {setWeather(res);});

            
        
            /*.then(res => res.json())
            .then((res) => console.log("weather retrieved",res));*/
            
    });

    return(
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className = {classes.icon}/>
                    <Typography variant="h6"> Versa </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className = {classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Hello World</Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hi! I'm trying to make a freelance tutor app that helps tutors manage their students! This sentence should be wrapping as it is classified as a paragraph.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">Change Design</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary">Secondary Action</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className = {classes.cardMedia} image="https://source.unsplash.com/random" title="Image Title"/>
                                <CardContent className = {classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        {weather.name}
                                    </Typography>
                                    <Typography>
                                        {`Current weather in ${weather.name} is ${Math.round((weather.main.temp - 273.1) * 10) / 10}`}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary" onClick={() => setWeather({name:"Singa",main:{temp:'undefined'}})}>Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {cards.map((card)=>(
                            <Grid item key ={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className = {classes.cardMedia} image="https://source.unsplash.com/random" title="Image Title"/>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className = {classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">Something here to give the footer a purpose!</Typography>                     
            </footer>
        </React.Fragment>
    )
}

export default App;
