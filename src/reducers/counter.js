// Reducers, as the name suggests, take in two things: previous state and an action. 
// Then they reduce it (read it return) to one entity: the new updated instance of state. 
// So reducers are basically pure JS functions which take in the previous state 
// and an action and return the newly updated state

const counterReducer = (state = 0, action) => {
    switch(action.type){
      case "INCREMENT":
        return state + 1
      case "DECREMENT":
        return state - 1
      default:
        return state
    }
}

export default counterReducer