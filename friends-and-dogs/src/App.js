/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// import other pages
import Home from './components/Home/Home';
import RequestDogWalk from './components/RequestDogWalk/RequestDogWalk';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Forum from './components/Forum/Forum';
import Admin from './components/Admin/Admin';
import FindLocation from './components/FindLocation/FindLocation';

// material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PetsIcon from '@material-ui/icons/Pets';
import { Button, rgbToHex } from '@material-ui/core';

const styles = {
  title: {
    flex: 1
  },
  appbar: {
    backgroundColor: "#808080"
  }
}

class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <AppBar position="static" style={styles.appbar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <PetsIcon />
                </IconButton>
                <Typography variant="h6" style={styles.title}>
                  Friends and Dog
                </Typography>
                <Button class="headerButton">Home</Button>
                <Button class="headerButton">RequestDogWalk</Button>
                <Button class="headerButton">Forum</Button>
                <Button class="headerButton"> FindLocation</Button>
              </Toolbar>
          </AppBar>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => 
                            (<Home/>)}/>
            <Route exact path='/requestdogwalk' render={() => 
                            (<RequestDogWalk />)}/>
            <Route exact path='/signup' render={() => 
                            (<Signup/>)}/>
            <Route exact path='/login' render={() => 
                            (<Login/>)}/>
            <Route exact path='/forum' render={() => 
                            (<Forum/>)}/>
            <Route exact path='/admin' render={() => 
                            (<Admin/>)}/>
            <Route exact path='/findlocation' render={() => 
                            (<FindLocation/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
