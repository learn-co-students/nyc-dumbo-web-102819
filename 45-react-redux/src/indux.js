import { createStore } from 'redux';

const initialState = {
  fruitBats: [],
  vampireBats: []
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


const store = createStore(reducer)

// console.log(store)


const addBatAction = {
  type: "ADD_FRUIT_BAT",
  name: "Flappy"
}

store.dispatch(addBatAction)
store.dispatch(addBatAction)
store.dispatch(addBatAction)

console.log(store.getState())

