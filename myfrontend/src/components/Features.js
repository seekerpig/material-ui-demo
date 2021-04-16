import React from "react";
import TreeList from "./TreeList";
import { Switch, Route, Link } from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    Tabs,
    Tab,
    Paper,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PaymentIcon from "@material-ui/icons/Payment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    treeContainer: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        
    },
    tabContainer: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
        
    },
}));

function Features() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [currentPage, setPage] = React.useState("OVERVIEW");

    const tabStatus = (event, newValue) => {
        setValue(newValue);
        setPage(event.target.innerText);
    };
    return (
        <React.Fragment>
            <div className={classes.tabContainer}>
                <Paper square>
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={tabStatus}
                        aria-label="disabled tabs example"
                    >
                        <Tab style={{fontSize:"0.7rem"}} label="Overview" component={Link} to="/features/overview"></Tab>
                        <Tab style={{fontSize:"0.7rem"}} label="Student Management" component={Link} to="/features/keeptrackofstudents"></Tab>
                        <Tab style={{fontSize:"0.7rem"}} label="Calendar Scheduling" component={Link} to="/features/calendarscheduling"></Tab>
                        <Tab style={{fontSize:"0.7rem"}} label="Automatic Reminders" component={Link} to="/features/automaticreminders"></Tab>
                        <Tab style={{fontSize:"0.7rem"}} label="Online Payments" component={Link} to="/features/onlinepayments"></Tab>
                    </Tabs>
                </Paper>
            </div>

            <Container maxWidth="md" style={{ marginBottom: "2rem" }}>
                <h1 style={{ textAlign: "center" }}> {currentPage} </h1>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div className={classes.treeContainer}>
                        <TreeList onPageChange={setPage}/>
                    </div>

                    <Switch>
                        <Route path="/features/overview">
                            <div>
                                <h2 style={{ marginTop: 0, paddingTop: 0 }}>
                                    What is TutorsDojo?
                                </h2>
                                <Grid container spacing={2}>
                                    <Grid
                                        container
                                        item
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        direction="column"
                                        className={classes.gridbreak}
                                    >
                                        <Grid item>
                                            <ScheduleIcon
                                                fontSize="large"
                                                style={{
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "5px",
                                                    padding: "1rem",
                                                    width: "60px",
                                                    height: "60px",
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                            >
                                                Easy Scheduling
                                            </Typography>
                                        </Grid>

                                        <Grid item>
                                            Allow your students to see your open
                                            schedule and book as accordingly.
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        item
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        direction="column"
                                        className={classes.gridbreak}
                                    >
                                        <Grid item>
                                            <NotificationsActiveIcon
                                                fontSize="large"
                                                style={{
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "5px",
                                                    padding: "1rem",
                                                    width: "60px",
                                                    height: "60px",
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                            >
                                                Reminders
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            Never forget a lesson! Automate
                                            reminders to send to the students to
                                            let them know of lessons the next
                                            day!
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        item
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        direction="column"
                                        className={classes.gridbreak}
                                    >
                                        <Grid itemProp>
                                            <PaymentIcon
                                                fontSize="large"
                                                style={{
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "5px",
                                                    padding: "1rem",
                                                    width: "60px",
                                                    height: "60px",
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                                noWrap
                                            >
                                                Automated Payments
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            Send payment reminders, see
                                            outstanding payments, invoices and
                                            payment analytics.
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Typography
                                    variant="body2"
                                    style={{ margin: "1rem 0rem" }}
                                >
                                    We help you schedule lessons, send automated
                                    lesson reminders and keep track of your
                                    student so you don't have to.
                                </Typography>
                            </div>
                        </Route>
                        <Route path="/features/keeptrackofstudents">
                            <div>
                                <h2 style={{ marginTop: 0, paddingTop: 0 }}>
                                    Attendance
                                </h2>
                                TutorsDojo makes it easy to track student
                                attendance with options for every situation.
                                Choose from Present, Late, Absent, or Tutor
                                Absent, then select the correct billing option.
                                Each time a student’s attendance is taken, their
                                Family Account will automatically be up to date
                                with the correct charges, removing any extra
                                manual work for you!
                            </div>
                        </Route>
                        <Route path="/features/calendarscheduling">
                            <div>
                                <h2 style={{ marginTop: 0, paddingTop: 0 }}>
                                    Private and Group Lessons
                                </h2>
                                We understand that every lesson is different.
                                With TutorsDojo, you can easily schedule
                                individual lessons and group lessons! Set up
                                default pricing for each student to make
                                scheduling their private lessons just a few
                                clicks away.
                                <h2>Open Lesson Slots</h2>
                                Create open lesson slots so your students can
                                register for lessons through the Student Portal!
                                Set up policies in your Business Settings to
                                control registration and cancellation deadlines,
                                and even automatically convert cancelled lessons
                                into open slots.
                                <h2>Online Lessons</h2>
                                Tutors all over the world have adapted to
                                virtual teaching – whether it’s a long-term
                                business model, short-term solution during a
                                business closure, or an alternate way of
                                offering make-up lessons. TutorsDojo integrates
                                with Zoom, FaceTime, and Skype, so you can
                                easily save usernames or meeting URLs and join
                                lessons directly from your calendar!
                                <h2>Categories/Locations</h2>
                                Add lesson categories and locations to make it
                                that much easier to organize your business.
                                Create categories for different subjects,
                                workshops, and business closures. Use locations
                                to add different lesson rooms to avoid double
                                booking, or separate your school lessons from
                                your home lessons. Use locations to schedule
                                your Zoom, FaceTime, or Skype lessons – add the
                                “Location” placeholder to lesson reminders and
                                your students will get sent the link! Color-code
                                your calendar by category, tutor, or location
                                for an easy-to-read schedule.
                                <h2>Make-up Credits</h2>
                                It’s easy to track make-up credits with
                                TutorsDojo! Enable make-up credits for specific
                                categories, and you’ll be able to issue credits
                                when taking attendance. Allow students to
                                register for their own make-up lesson through
                                the Student Portal, or apply the credit when
                                taking attendance. Need to give an extra credit?
                                No problem – just add a manual make-up credit in
                                their student profile!
                                <h2>Calendar Sync</h2>
                                So many students, so little time! Sync your
                                TutorsDojo calendar with your phone, tablet or
                                computer’s calendar; no matter where you are,
                                your calendar is with you. And, if you choose to
                            </div>
                        </Route>
                        <Route path="/features/automaticreminders">
                            <div>
                                <h2 style={{ marginTop: 0, paddingTop: 0 }}>
                                    SMS/Email Reminders
                                </h2>
                                Life moves pretty quickly nowadays, and that’s
                                why so many students and parents love the SMS /
                                Email Reminders feature. Cut down on missed
                                lessons and last-minute cancellations by
                                automatically sending out lesson reminders a
                                couple of days or hours in advance. You can even
                                customize the message to include the location,
                                event description, online lesson URL, or
                                anything else you want your students to know!
                                <h2>Mass Emails</h2>
                                Save valuable time by sending custom emails to
                                multiple families in one click directly through
                                TutorsDojo! Messages will be saved in your
                                Message History so you’ll have a record of all
                                communication that has been sent.
                            </div>
                        </Route>
                        <Route path="/features/onlinepayments">
                            <div>
                                <h2 style={{ marginTop: 0, paddingTop: 0 }}>
                                    Credit Card Payments
                                </h2>
                                No more going to the bank to deposit cash or
                                waiting for checks to clear! TutorsDojo
                                integrates with trusted payment processors
                                Stripe and PayPal to make online credit card
                                payments a breeze.
                                <h2>ACH Payments</h2>
                                Credit cards aren’t the only way to accept
                                payments – with Stripe, you can accept ACH bank
                                transfers! ACH transfers have lower processing
                                fees, though they take longer to process.
                                Currently, ACH payments are only available to
                                Stripe users in the US.
                                <h2>Auto Pay</h2>
                                With Auto Pay, you never need to chase down
                                payments again! Once a credit card is saved to a
                                family’s account and has Auto Pay enabled, just
                                email the invoice and their card will
                                automatically be charged. When used alongside
                                auto-invoicing, you don’t need to lift a finger!
                                Just sit back and watch as your revenue comes
                                rolling in!
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Features;
