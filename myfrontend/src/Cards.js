import React from "react";
import {
    Container,
    Grid,
    CardMedia,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    buttons: {
        marginTop: "40px",
    },
    container:{
        backgroundColor: theme.palette.background.paper,
        
    },
    cardGrid: {
        padding: "20px 0",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // aspect ratio of 16:9
    },
    cardContent: {
        flexGrow: "1",
    },
}));

const times5 = [1, 2, 3, 4, 5];

function Cards() {
    const classes = useStyles();
    const [weather, setWeather] = React.useState({
        name: "yet to be retrieved",
        main: { temp: "undefined" },
    });

    React.useEffect(() => {
        document.title = `Current weather is : ${weather.name}.`;
    });

    React.useEffect(() => {
        fetch("/getWeathersingapore")
            .then((res) => res.json())
            .then((res) => {
                setWeather(res);
            });

        /*.then(res => res.json())
            .then((res) => console.log("weather retrieved",res));*/
    });

    return (
        <div className={classes.container}>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image Title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    {weather.name}
                                </Typography>
                                <Typography>
                                    {`Current weather in ${weather.name} is ${
                                        Math.round(
                                            (weather.main.temp - 273.1) * 10
                                        ) / 10
                                    }`}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() =>
                                        setWeather({
                                            name: "Singa",
                                            main: { temp: "undefined" },
                                        })
                                    }
                                >
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {times5.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this
                                        section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Cards;
