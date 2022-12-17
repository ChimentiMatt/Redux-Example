const loggedReducer = (state = false, action) => {
    switch(action.type){
      case "SING_IN":
        return !state
      default:
        return state
    }
}

export default loggedReducer