import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    //Redirect,
} from "react-router-dom";
import { CssBaseline, Button } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Banner from "./Banner.js";
import PriceBanner from "./PriceBanner";
//import Cards from "./Cards.js"
import Wave from "./Wave.js";
import Pointer3 from "./Pointer3.js";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import Features from "./Features";
import FormComponent from "./Form";
import CenterContainer from "./CenterContainer";

//import { orange } from '@material-ui/core/colors';

/*const useStyles = makeStyles((theme)=>({
    
}));*/

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#007aff",
            },
            
            background:{
                default:"#ffffff",
            },
        },
        typography: {
            fontFamily: "Poppins, sans-serif",
            h1: {
                fontSize: 48,
                fontWeight: 600,
            },
            h2: {
                fontWeight: 600,
            },
            h3: {
                fontWeight: 600,
            },
            h4: {
                fontWeight: 600,
            },
            h5: {
                fontWeight: 600,
            },
            h6: {
                fontWeight: 600,
            },
        },
    });

    return (
        <React.Fragment>
            <Router>
                <ThemeProvider theme={theme}>
                    {<CssBaseline />}
                    <div className="NavBanner">
                        <Navbar />
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/features">
                            <Features />
                        </Route>
                        <Route path="/faq">
                            <FAQ />
                        </Route>
                        <Route path="/pricing">
                            <Pricing />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route
                            path="/login"
                            component={() => {
                                window.location.href =
                                    "https://app.tutorsdojo.com";
                                return null;
                            }}
                        />
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>

                    <Footer />
                </ThemeProvider>
            </Router>
        </React.Fragment>
    );
}

export default App;

function Home() {
    return (
        <div>
            <div className="NavBanner">
                <Banner />
            </div>
            <Wave />
            <Pointer3 />
            <LeftContainer
                image="./images/calendar.png"
                title="Smart Calendar"
                subtitle="A smart calendar that allows the tutor to showcase open slots, send SMS and email lesson reminders, take attendance, send date proposal and even allow your students to see your opening lesson timings."
            />
            <RightContainer
                image="./images/billingTablet.png"
                title="Automated Billing"
                subtitle="Stop fussing over having to ask students for lesson payments, instead, we will help you send payment reminders, invoices and ensure that students complete their payments on time! We even have an analytics for payment, to show outstanding payments, how much you've earnt this month and etc."
            />
            <div style={{ backgroundColor: "#fafafa", marginBottom:"4rem", marginTop:"2rem" }}>
                <CenterContainer
                    greycontainer={false}
                    imgWidth="50%"
                    image="./images/reports1.png"
                    smalltitle="INSIGHTS"
                    title="Track Analytics"
                    subtitle="Analyze lessons hours, counts and revenue; invoice totals and payments received; teacher hours and payments, gross margins and much more."
                />
                <CenterContainer
                    greycontainer={false}
                    imgWidth="50%"
                    image="./images/calendar1.png"
                    smalltitle="TRACKING"
                    title="Attendance"
                    subtitle="TutorsDojo makes it easy to track student
                            attendance with options for every situation.
                            Choose from Present, Late, Absent, or Tutor
                            Absent, then select the correct billing option.
                            Each time a student???s attendance is taken, their
                            Family Account will automatically be up to date
                            with the correct charges, removing any extra
                            manual work for you!"
                />
                <CenterContainer
                    greycontainer={false}
                    imgWidth="50%"
                    image="./images/payment3.png"
                    smalltitle="AUTOMATED REMINDERS"
                    title="Payment Reminders"
                    subtitle="Set up automated payment reminders to be sent at on any overdue payments. No more need to chase down payments again!"
                />
            </div>

            {/*<Cards/>*/}
        </div>
    );
}

function FAQ() {
    return (
        <div>
            <h1> FAQ Page </h1>
        </div>
    );
}

function Pricing() {
    return (
        <div>
            <PriceBanner />
        </div>
    );
}

function Contact() {
    return <FormComponent />;
}

function Page404() {
    return (
        <div style={{ textAlign: "center", padding: "10vh" }}>
            <h1> Page Error: 404</h1>
            <h1> Oops, this page could not be found</h1>
            <Button variant="contained" color="primary" component={Link} to="/">
                Back to Home
            </Button>
        </div>
    );
}
