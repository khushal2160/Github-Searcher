import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './components/Github';
import Header from './components/Header';
import Auth0Lock from 'auth0-lock';
import Keys from './Keys';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile')) 
    };
  }

  static defaultProps = {
    clientID: Keys.clientID,
    domain: Keys.domain
  };

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authRes) => {

      // console.log(authRes);
      this.lock.getProfile(authRes.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }

        this.setProfile(authRes.accessToken, profile);
      });
    });
  }

  setProfile(accessToken, profile){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  onLock()
  {
    this.lock.show();
  }

  onLogout(){
    this.setState({
      accessToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }

  render(){
    let token = '';
        if(this.state.accessToken)
        {
            token = <Github />;
        }
        else
        {
            token = "Click on Login first to do the desired stuff.";
        }
    return (
      <div className="App">
        <Header 
        accessToken={this.state.accessToken}
        onLogout={this.onLogout.bind(this)}
        onLogin={this.onLock.bind(this)} />
        {token}
      </div>
    );
  }
}

export default App;
