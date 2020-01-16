import React from 'react';

class LogIn extends React.Component {

  state = {
    logIn: true,
    username: "",
    password: "",
    errors: []
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  logInSubmitted = (event) => {
    event.preventDefault()
  }

  signUpSubmitted = (event) => {
    event.preventDefault()
  }

  render(){
    return <section>
      <ul className="errors">
        {
          this.state.errors.map(error => <li>{ error }</li>)
        }
      </ul>
      { 
        this.state.logIn 
          ? <>
              <h2>Log In</h2>
              <button onClick={ () => this.setState({ logIn: false }) }>I need to register!!!</button>
            </>
          : <>
              <h2>Sign up</h2>
              <button onClick={ () => this.setState({ logIn: true }) }>I already signed up!!!</button>
            </> 
      }
      <form onSubmit={ this.state.logIn ? this.logInSubmitted : this.signUpSubmitted }>
        <label  htmlFor="username">Username</label>
        <input  id="username" 
                type="text" 
                onChange={ this.onChange /* for controlled form input status */ } 
                name="username" 
                value={ this.state.username /* for controlled form input status */ } />
        <label  htmlFor="password">Password</label>
        <input  id="password" 
                type="password" 
                onChange={ this.onChange } 
                name="password" 
                value={ this.state.password } />
        <input type="submit" />
      </form>
    </section>
  }
}

export default LogIn