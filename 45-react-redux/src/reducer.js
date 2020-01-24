
const fruitBats = [
    {
      id: 1,
      name: "Flappy"
    },
    {
      id: 2,
      name: "Scrappy"
    }
  ]
  const vampireBats = [
    {
      id: 1,
      name: "Count Flapula"
    },
    {
      id: 2,
      name: "Edward Flappington"
    },
    {
      id: 3,
      name: "Alice Flappington"
    },
    {
      id: 4,
      name: "Jasper Flappington"
    },
    {
      id: 5,
      name: "Carlisle Flappington"
    }
  ]


const initialState = {
  fruitBats: [ ...fruitBats],
  vampireBats: [ ...vampireBats]
}

const reducer = (existingState = initialState, action) => {

  // console.log(existingState)
  // console.log(action)

  if (action.type === "ADD_FRUIT_BAT") {
    // existingState.fruitBats.push({ name: "flappy" }) 
    // NO! BAD! Carlie says this directly mutates state!
    return { 
      ...existingState,
      fruitBats: [ ...existingState.fruitBats, { name: action.name } ]
    }
  }

  return existingState
}


export default reducer

