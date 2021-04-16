import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {CssBaseline, Button} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import Banner from "./Banner.js"
//import Cards from "./Cards.js"
import Wave from "./Wave.js"
import Pointer3 from "./Pointer3.js"
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
//import { orange } from '@material-ui/core/colors';


/*const useStyles = makeStyles((theme)=>({
    
}));*/

function App() {

    const theme = createMuiTheme({
        palette:{
            primary:{
                main: "#007aff",
            },
            /*
            background:{
                default:"#ffffff",
            }*/
        },
        typography:{
            fontFamily: 'Poppins, sans-serif',
            h1: {
                fontSize:48,
                fontWeight:600,
            },
            h2:{
                fontWeight:600,
            },
            h3:{
                fontWeight:600,
            },
            h4:{
                fontWeight:600,
            },
            h5:{
                fontWeight:600,
            },
            h6:{
                fontWeight:600,
            },
        },
    });
    
    
    return(
        <React.Fragment>
            <Router>
            <ThemeProvider theme={theme}>
            {<CssBaseline/>}
            <div className="NavBanner">
                <Navbar/>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/features">
                    <Features/>
                </Route>
                <Route path="/faq">
                    <FAQ/>
                </Route>
                <Route path="/pricing">
                    <Pricing/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
               
                <Footer/>                   
            </ThemeProvider>
            </Router>
        </React.Fragment>
    )
}

export default App;

function Home(){
    return(
        <div>
        <div className="NavBanner">
            <Banner/> 
        </div>
        <Wave/> 
        <Pointer3/>
        <LeftContainer image="./images/calendar.png" title="Smart Calendar" subtitle="A smart calendar that allows the tutor to showcase open slots, send SMS and email lesson reminders, take attendance, send date proposal and even allow your students to see your opening lesson timings."/>
        <RightContainer image="./images/billingTablet.png" title="Automated Billing" subtitle="Stop fussing over having to ask students for lesson payments, instead, we will help you send payment reminders, invoices and ensure that students complete their payments on time! We even have an analytics for payment, to show outstanding payments, how much you've earnt this month and etc."/>
        {/*<Cards/>*/}
        </div>
    )
}

function Features(){
    return(
        <div>
            <h1> Features Page </h1>
        </div>
    )
}

function FAQ(){
    return(
        <div>
            <h1> FAQ Page </h1>
        </div>
    )
}

function Pricing(){
    return(
        <div>
            <h1> Pricing Page </h1>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h1> Contact Page </h1>
        </div>
    )
}

function Login(){
    return(
        <div>
            <h1> Login Page </h1>
        </div>
    )
}

function Page404(){
    return(
        <div style={{textAlign:"center", padding:"10vh"}}>
            <h1> Page Error: 404</h1>
            <h1> Oops, this page could not be found</h1>
            <Button variant="contained" color="primary" component={Link} to="/">Back to Home</Button>
        </div>
    )
}