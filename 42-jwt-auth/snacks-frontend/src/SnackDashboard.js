import React from 'react';

class SnackDashboard extends React.Component {

  state = {
    allSnacks: [],
    mySnacks: []
  }

  componentDidMount(){
    // const token = this.props.token
    // const userId = this.props.userId
    const { token, userId } = this.props

    fetch("http://localhost:3000/snacks", {
      headers: {
        "Authorization": token 
      }
    })
      .then(res => res.json())
      .then(data => console.log(data) || this.setState({
        allSnacks: data
      }))

    fetch(`http://localhost:3000/users/${ userId }`, {
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(user => this.setState({
      mySnacks: user.snacks
    }))
  }

  render(){
    return (<>
      <section>
        <h2>All Snacks</h2>
        <ol>
          {
            // THIS IS NOT VERY DRY AND I OUGHT TO REFACTOR
            this.state.allSnacks.map(snack => <li key={ snack.id }>{ snack.name }</li>)
          }
        </ol>
      </section>
      <section>
        <h2>My Snacks</h2>
        <ol>
          {
            // THIS IS NOT VERY DRY AND I OUGHT TO REFACTOR
            this.state.mySnacks.map(snack => <li key={ snack.id }>{ snack.name }</li>)
          }
        </ol>
      </section>
    </>)
  }

}

export default SnackDashboard