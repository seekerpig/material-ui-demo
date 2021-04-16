import React from "react";
import {
    Typography,
    Container,
    Grid,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Card,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    priceContainer:{
        marginBottom: theme.spacing(6),
    },
    heroContent: {
        padding: theme.spacing(4, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
}));
const tiers = [
    {
        title: "Starter",
        price: "0",
        description: [
            "10 students included",
            "Limited Features",
            "Help center access",
            "Email support",
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined",
        linkUrl: "./login",
    },
    {
        title: "Pro",
        subheader: "Most popular",
        price: "0",
        description: [
            "100 students included",
            "All Features",
            "Help center access",
            "Email support",
        ],
        buttonText: "Get started",
        buttonVariant: "contained",
        linkUrl: "./login",
    },
    {
        title: "Enterprise",
        price: "0",
        description: [
            "Unlimited students",
            "All Features",
            "Additional Help",
            "24/7 Support",
        ],
        buttonText: "Contact us",
        buttonVariant: "outlined",
        linkUrl: "./login",
    },
];
function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.priceContainer}>
            {/* Hero unit */}
            <Container
                maxWidth="sm"
                component="main"
                className={classes.heroContent}
            >
                <Typography
                    component="h1"
                    variant="h1"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Pricing
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    TutorsDojo is completely free for the time being! <br/><br/>All users have access to all the features available. Feel free to leave us feedback or additional features you want implemented.
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === "Enterprise" ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: "center" }}
                                    subheaderTypographyProps={{
                                        align: "center",
                                    }}
                                    action={
                                        tier.title === "Pro" ? (
                                            <StarBorderIcon />
                                        ) : null
                                    }
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="textPrimary"
                                        >
                                            ${tier.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="textSecondary"
                                        >
                                            /mo
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant}
                                        color="primary"
                                        component={Link}
                                        to={tier.linkUrl}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* End hero unit */}
        </div>
    );
}

export default Banner;
