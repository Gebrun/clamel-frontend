import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Nav from './Nav';
import Header from './Header';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD from './SectionD';
import Footer from './Footer';

// 1. Connect to the globalState
// 2. Conditionally render the cards
// 3. Use the useEffect() to subscribe to the globalState.loggedIn
// 4. If globalState.loggedIn is true, fetch products from db

const Landing = () => {

    return (
        <div>
            <Nav/>
            <Header/>
            <SectionA/>
            <SectionB/>
            <SectionC/>
            <SectionD/>
            <Footer/>
        </div>
      );
    }

export default Landing;