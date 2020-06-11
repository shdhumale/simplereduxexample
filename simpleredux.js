const { createStore } = require('redux')

const initialState = {
    counter: 1
}
const myReducer = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type === 'increment') {
        //as in react we do not directly modify the state without setState here we will do it by
        //creating copy of the state using spread operators
        newState.counter = newState.counter + 1
    }

    if (action.type === 'decrement') {
        //as in react we do not directly modify the state without setState here we will do it by
        //creating copy of the state using spread operators
        newState.counter = newState.counter - 1
    }
    return newState
}

const store = createStore(myReducer)
store.subscribe(() => {
    console.log("Notified automatically that state is changed:- " + JSON.stringify(store.getState()))
})
//console.log(store.getState())
store.dispatch({ type: 'increment' })
//console.log(store.getState())
store.dispatch({ type: 'decrement' })
//console.log(store.getState())