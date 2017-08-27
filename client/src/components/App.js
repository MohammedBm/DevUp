import React, { Component } from 'react';
import {Room} from '../utls/requests'
import RoomIndexPage from './pages/RoomIndexPage'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import RoomShowPage from './pages/RoomShowPage'
import RoomNewPage from './pages/RoomNewPage'
import SignInPage from './pages/SignInPage'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignedIn: false
    };
  }
  componentWillMount() {
    this.setState({
      isSignedIn: !!window.localStorage.getItem('jwt')
    })
  }

  signOut = (event) => {
    event.preventDefault();
    window.localStorage.removeItem('jwt');
    this.setState({isSignedIn: false});
  }

  signIn = () => {
    this.setState({isSignedIn: true})
  }

  get currentUser() {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }

  render() {
    const {currentUser} = this;
    const {isSignedIn} = this.state;

    return (
      <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/rooms/new'>New Room</Link>
          {
            isSignedIn
            ? ([
              <span key="123">
                Hello,  {currentUser.firstName}!
              </span>,
              <a key="456" href onClick={this.signOut}>Sign out</a>
            ]) : (
              <Link to='/sign_in'>Sign In</Link>
            )
          }

        </nav>
        <h1>GameUp</h1>

        <Switch>
          <Route exact path='/' component={RoomIndexPage} />
          <Route exact path='/sign_in' render={(props) => <SignInPage {...props} onSignIn={this.signIn}/>}/>
          <Route exact path='/rooms/new' component={RoomNewPage} />
          <Route exact path='/rooms/:id' component={RoomShowPage} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
