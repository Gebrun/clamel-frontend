import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Settings from './Settings';
import './App.css';
import './Login.css';
import './Register.css';
// import Nav from './Nav';
// import Header from './Header';
// import SectionA from './SectionA';
// import SectionB from './SectionB';
// import SectionC from './SectionC';
// import SectionD from './SectionD';
// import Footer from './Footer';


const PrivateRoute = ({ component: Component, ...otherProps }) => {

  const [globalState, setGlobalState] = useContext(AppContext);

  if(globalState.loggedIn) {
    return(<Route component={Component} {...otherProps} />);
  } else {
    return(<Redirect to="/login" />);
  }
}


const App = () => {

const [globalState, setGlobalState] = useState({
  loggedIn: localStorage.getItem('jwt') ? true : false,
  user: null
});


useEffect(
  ()=>{
      // when (and if) globalState.loggedIn changes,
      // run the below code
      console.log("This the loggedIn state", globalState.loggedIn)
  }, 
  [globalState.loggedIn]
)

return (
  <AppContext.Provider value={[globalState, setGlobalState]}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing}/>
        <Route path="/login" exact={true} component={Login}/>
        <Route path="/register" exact={true} component={Register}/>
        <PrivateRoute path="/settings" exact={true} component={Settings}/>
      </Switch>
    </BrowserRouter>
  </AppContext.Provider>
)
}
export default App;
