import React, { Component } from 'react';
import './App.css';
import ApiRunner from './components/ApiRunner';
import Auth from './components/Auth';
import LikedSongs from './components/LikedSongs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { MixpanelConsumer } from 'react-mixpanel';
import Logout from './components/Logout';
import Info from './components/Info';
import NavBar from './components/NavBar';
import SpotifyPlayer from './components/Player';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router history={history}>
          <NavBar />
          <MixpanelConsumer>
            {mixpanel => <ApiRunner mixpanel={mixpanel} />}
            {/* {mixpanel => <LikedSongs {...mixpanel} />} */}
          </MixpanelConsumer>
          <Route // Here we need to wrap this route within a <MixpanelConsumer>
            exact
            path='/dashboard'
            render={props => <LikedSongs {...props} />}
          />
          {/* <Route exact path='/' render={props => <Auth {...props} />} /> */}
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/info' render={props => <Info {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
