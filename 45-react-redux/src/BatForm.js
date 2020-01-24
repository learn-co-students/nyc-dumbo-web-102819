import React from 'react'
import { connect } from 'react-redux'
import { addFruitBat } from './actionCreators'

class BatForm extends React.Component {

    state = {
      name: ""
    }

    handleChange = event => this.setState({ name: event.target.value })
    
    handleSubmit = event => {
      event.preventDefault()
      this.props.addBat(this.state.name)
      this.setState({ name: '' })
    }

    render(){
      console.log("form gets rendered")
      return <form onSubmit={ this.handleSubmit }>
        <label htmlFor="bat-name">Name:</label>
        <input type="text" 
                id="bat-name" 
                value={ this.state.name } 
                name="name" 
                onChange={ this.handleChange } />
        <input type="submit" />
        {
          this.props.greet("whirled")
        }
      </form>
    }
} 

const mapStateToProps = state => {
  return {
    // bats: state.fruitBats
  }
}

const greet = (thingToGreet) => {
  return "hello " + thingToGreet
}

const mapDispatchToProps = dispatch => {

  const addBat = name => {
    dispatch(addFruitBat(name))
  }
    
  return {
    greet: greet,
    addBat: addBat
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BatForm)








