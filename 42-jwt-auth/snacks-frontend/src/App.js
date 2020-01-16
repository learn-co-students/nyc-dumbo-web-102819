import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  render(){
    return (<main>
      <header>
        <button>Log out</button> 
      </header>
      {
        true
          ? <SnackDashboard  />
          : <LogIn />
      }
    </main>);
  }
}

export default App;
