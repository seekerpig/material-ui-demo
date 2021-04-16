import React from "react";
import {
    Grid,
    Container,
    TextField,
    Button,
    Typography,
    Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_BZMey11Gp3OVEDdC3XEu7");

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 5),
        minHeight: 500,
    },
    divider: {
        marginBottom: theme.spacing(1),
    },
    paperCard: {
        padding: 20,
    },
}));

function Form() {
    const classes = useStyles();
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setFormSubmitted(true);
        emailjs
            .sendForm(
                "service_0y2usva",
                "template_k0ymbhm",
                e.target,
                "user_BZMey11Gp3OVEDdC3XEu7"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }
    return (
        <form className={classes.container} onSubmit={sendEmail}>
            <Container maxWidth="sm">
                <Paper className={classes.paperCard}>
                    <Typography variant="h1" align="center" gutterBottom>
                        Contact Us
                    </Typography>
                    <Grid container direction="column">
                        <Grid item className={classes.divider}>
                            <TextField
                                variant="outlined"
                                placeholder="Your Name"
                                inputProps={{ "aria-label": "Your Name" }}
                                fullWidth
                                required
                                name="user_name"
                            />
                        </Grid>
                        <Grid item className={classes.divider}>
                            <TextField
                                variant="outlined"
                                placeholder="Email Address"
                                inputProps={{ "aria-label": "Email Address" }}
                                fullWidth
                                required
                                name="user_email"
                            />
                        </Grid>
                        <Grid item className={classes.divider}>
                            <TextField
                                variant="outlined"
                                placeholder="Contact Number (Optional)"
                                inputProps={{ "aria-label": "Contact Number" }}
                                fullWidth
                                name="contact_number"
                            />
                        </Grid>
                        <Grid item className={classes.divider}>
                            <TextField
                                variant="outlined"
                                multiline
                                placeholder="Message"
                                inputProps={{ "aria-label": "Message" }}
                                rows={4}
                                fullWidth
                                required
                                name="message"
                            />
                        </Grid>
                        <Grid container item xs={12} align="center">
                            <Grid item xs={12}>
                                {formSubmitted === false ? (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        type="submit"
                                    >
                                        Send Message
                                    </Button>
                                ) : (
                                    <p>Form is submitted successfully</p>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </form>
    );
}

export default Form;
