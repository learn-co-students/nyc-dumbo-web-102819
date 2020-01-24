import React from 'react';
import { connect } from 'react-redux' 

const BatList = props => {
  // console.log(props)
  return <ul>
    {
      props.bats.map(bat => <li key={ bat.id }>{ bat.name }</li>)
    }
  </ul>
}


const mapStateToProps = (state) => {
  return {
    bats: state.fruitBats
    // carlie: { age: 33 },
    // guligena: { favoriteBands: [ "Teh Spice Girls"] }
  }
}

// const higherOrderComponent = connect(mapStateToProps)
// const wrappedComponent = higherOrderComponent(BatList)
// export default wrappedComponent

export default connect(mapStateToProps)(BatList)



