import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    token: null,
    userId: null
  }

  componentDidMount(){
    this.setState({
      token: localStorage.token,
      userId: localStorage.userId,
    })
  }

  setToken = (token, userId) => {
    this.setState({
      token: token,
      userId: userId
    })
    localStorage.token = token
    localStorage.userId = userId
  }

  logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    this.setState({
      token: null,
      userId: null
    })
  }

  render(){
    return (<main>
      <header>
        <button onClick={ this.logout }>Log out</button> 
      </header>
      {
        this.state.token
          ? <SnackDashboard token={ this.state.token } userId={ this.state.userId } />
          : <LogIn setToken={ this.setToken } />
      }
    </main>);
  }
}

export default App;
