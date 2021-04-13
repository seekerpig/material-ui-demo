import React from 'react'
import './App.css';
import {CssBaseline} from '@material-ui/core';
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
            /*primary:{
                main: orange[500],
            },
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
            
            <ThemeProvider theme={theme}>
            {<CssBaseline/>}
            <div className="NavBanner">
                <Navbar/>
                <Banner/> 
            </div>
                <Wave/> 
                <Pointer3/>
                <LeftContainer/>
                <RightContainer/>
                {/*<Cards/>*/}
                <Footer/>                   
            </ThemeProvider>
            
        </React.Fragment>
    )
}

export default App;
