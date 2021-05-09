import React from "react";
import TreeList from "./TreeList";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    Tabs,
    Tab,
    Paper,
    Card,
    CardContent,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PaymentIcon from "@material-ui/icons/Payment";
import { makeStyles } from "@material-ui/core/styles";
import CenterContainer from "./CenterContainer";

const useStyles = makeStyles((theme) => ({
    treeContainer: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    tabContainer: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        paddingBottom:'2rem',
    },

    cardContent: {
        flexGrow: 1,
    },

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

function Features() {
    const classes = useStyles();
    
    const [value, setValue] = React.useState(0);
    const [currentPage, setPage] = React.useState("OVERVIEW");

    const tabStatus = (event, newValue) => {
        setValue(newValue);
        setPage(event.target.innerText);
    };

    


    return (
        <div className={classes.container}>
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
                        <Tab
                            style={{ fontSize: "0.7rem" }}
                            label="Overview"
                            component={Link}
                            to="/features/overview"
                        ></Tab>
                        <Tab
                            style={{ fontSize: "0.7rem" }}
                            label="Calendar Scheduling"
                            component={Link}
                            to="/features/calendarscheduling"
                        ></Tab>
                        <Tab
                            style={{ fontSize: "0.7rem" }}
                            label="Automatic Reminders"
                            component={Link}
                            to="/features/automaticreminders"
                        ></Tab>
                        <Tab
                            style={{ fontSize: "0.7rem" }}
                            label="Online Payments"
                            component={Link}
                            to="/features/onlinepayments"
                        ></Tab>
                    </Tabs>
                </Paper>
            </div>

            <Container maxWidth="md" style={{ paddingBottom: "2rem" }}>
                <h1
                    style={{
                        textAlign: "center",
                        marginTop: "0",
                        paddingTop: "2rem",
                    }}
                >
                    {" "}
                    {currentPage}{" "}
                </h1>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div className={classes.treeContainer}>
                        <TreeList onPageChange={setPage} />
                    </div>

                    <Switch>
                        <Route exact path="/features">
                        <Redirect to="/features/overview" />
                        </Route>
                        <Route path="/features/overview">
                            
                            <div>
                                <h2 style={{ marginTop: 0, paddingTop: 0 }}>
                                    What is TutorsDojo?
                                </h2>
                                <Typography variant="body2" gutterBottom>
                                    TutorsDojo is a tutoring business management
                                    system that offers timesheets, scheduling,
                                    payroll, invoicing, and tutor-student
                                    matching capabilities. We combine real depth
                                    of function with ease of use, allowing our
                                    users to easily accept card payment, pay
                                    their tutors, schedule classes, centrally
                                    manage their email marketing and much, much
                                    more.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ margin: "1rem 0rem" }}
                                >
                                    Use TutorsDojo to massively simplify your
                                    tutoring company's operations.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ margin: "1rem 0rem" }}
                                >
                                    We help you schedule lessons, send automated
                                    lesson reminders and keep track of your
                                    student so you don't have to.
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Card className={classes.card}>
                                            <CardContent
                                                className={classes.cardContent}
                                            >
                                                <ScheduleIcon
                                                    style={{
                                                        backgroundColor:
                                                            "#FFD700",
                                                        borderRadius: "5px",
                                                        padding: "0.5rem",
                                                        width: "40px",
                                                        height: "40px",
                                                    }}
                                                />
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                >
                                                    Easy Scheduling
                                                </Typography>
                                                <Typography variant="body2">
                                                    Allow your students to see
                                                    your open schedule and book
                                                    as accordingly.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Card className={classes.card}>
                                            <CardContent
                                                className={classes.cardContent}
                                            >
                                                <NotificationsActiveIcon
                                                    style={{
                                                        backgroundColor:
                                                            "#FFD700",
                                                        borderRadius: "5px",
                                                        padding: "0.5rem",
                                                        width: "40px",
                                                        height: "40px",
                                                    }}
                                                />
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                >
                                                    Reminders
                                                </Typography>
                                                <Typography variant="body2">
                                                    Never forget a lesson!
                                                    Automate reminders to send
                                                    to the students to let them
                                                    know of lessons the next
                                                    day!
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Card className={classes.card}>
                                            <CardContent
                                                className={classes.cardContent}
                                            >
                                                <PaymentIcon
                                                    style={{
                                                        backgroundColor:
                                                            "#FFD700",
                                                        borderRadius: "5px",
                                                        padding: "0.5rem",
                                                        width: "40px",
                                                        height: "40px",
                                                    }}
                                                />
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                >
                                                    Automated Payments
                                                </Typography>
                                                <Typography variant="body2">
                                                    Send payment reminders, see
                                                    outstanding payments,
                                                    invoices and payment
                                                    analytics.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </Route>
                        <Route path="/features/calendarscheduling">
                            <div>
                                <CenterContainer
                                    image="./images/calendar1.png"
                                    smalltitle="TRACKING"
                                    title="Attendance"
                                    subtitle="TutorsDojo makes it easy to track student
                                    attendance with options for every situation.
                                    Choose from Present, Late, Absent, or Tutor
                                    Absent, then select the correct billing option.
                                    Each time a student’s attendance is taken, their
                                    Family Account will automatically be up to date
                                    with the correct charges, removing any extra
                                    manual work for you!"
                                />
                                <CenterContainer
                                    image="./images/calendar2.png"
                                    smalltitle="EASY AVAILABILITY"
                                    title="Teacher Availability"
                                    subtitle="View teacher availability on the calendar for quickly finding openings. Teachers can manage their availability from their personal Teachworks accounts, so their availability is always up-to-date."
                                />
                                <CenterContainer
                                    image="./images/calendar3.png"
                                    smalltitle="SIMPLIFIED SCHEDULING"
                                    title="Quick and Easy Scheduling"
                                    subtitle="Manage schedule changes right from the calendar. Drag & Drop lessons to a new time, teacher or location in seconds.

                                    ‍Resize lessons to change duration. Click to schedule a new lesson."
                                />
                            </div>
                        </Route>
                        {/*<Route path="/features/calendarscheduling">
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
                            </Route>*/}
                        <Route path="/features/automaticreminders">
                            <div>
                            <CenterContainer
                                    image="./images/reminder1.png"
                                    smalltitle="AUTOMATED REMINDERS"
                                    title="Email Reminders"
                                    subtitle="Cut down on missed
                                    lessons and last-minute cancellations by
                                    automatically sending out lesson reminders a
                                    couple of days or hours in advance. You can even
                                    customize the message to include the location,
                                    event description, online lesson URL, or
                                    anything else you want your students to know!"
                                />
                                <CenterContainer
                                    image="./images/reminder2.png"
                                    smalltitle="INTEGRATED SMS"
                                    title="SMS Reminders"
                                    subtitle="Enable the SMS Lesson Reminders Add-On and provide students, parents and teachers with timely reminders sent right to their mobile phones.

                                    Customize messages and adjust lead times for each type of recipient. Easily view delivery results for all of your reminders."
                                />
                                <CenterContainer
                                    image="./images/reminder3.png"
                                    smalltitle="PUSH MESSAGE"
                                    title="Bulk Messages"
                                    subtitle="Save valuable time by sending custom emails to
                                    multiple families in one click directly through
                                    TutorsDojo! Messages will be saved in your
                                    Message History so you’ll have a record of all
                                    communication that has been sent."
                                />
                            </div>
                        </Route>
                        <Route path="/features/onlinepayments">
                            <div>
                            <CenterContainer
                                    image="./images/payment2.png"
                                    smalltitle="INTEGRATED PAYMENT"
                                    title="Credit Card Payments"
                                    subtitle="No more going to the bank to deposit cash or
                                    waiting for checks to clear! TutorsDojo
                                    integrates with trusted payment processors
                                    Stripe and PayPal to make online credit card
                                    payments a breeze."
                                />
                                 <CenterContainer
                                    image="./images/payment1.png"
                                    smalltitle="CUSTOMIZABLE"
                                    title="Professional Invoices"
                                    subtitle="Extend your company's brand with TutorsDojo' professional, customizable invoices. Add your company logo, contact details, instructions and more. Invoices can be emailed, printed and saved in PDF format."
                                />
                                <CenterContainer
                                    image="./images/payment3.png"
                                    smalltitle="AUTOMATED REMINDERS"
                                    title="Payment Reminders"
                                    subtitle="Set up automated payment reminders to be sent at on any overdue payments. No more need to chase down payments again!"
                                />
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Container>
        </div>
    );
}

export default Features;
