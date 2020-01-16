import React from 'react';

class SnackDashboard extends React.Component {

  state = {
    allSnacks: [],
    mySnacks: []
  }

  componentDidMount(){
    const { loggedInUserId, token } = this.props

    fetch("http://localhost:3000/snacks", {
      headers: {
        "Authorization": token
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        allSnacks: data
      }))

    if (loggedInUserId) {
      fetch(`http://localhost:3000/users/${ loggedInUserId }`, {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(user => console.log(user) || this.setState({
        mySnacks: user.snacks
      }))
    }
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