// Actions: Actions are a plain JavaScript object that contains information. 
// Actions are the only source of information for the store. Actions have a 
// type field that tells what kind of action to perform and all other fields contain information or data.

export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}