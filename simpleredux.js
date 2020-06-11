const { createStore } = require('redux')

const initialState = {
    counter: 1
}
const myReducer = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type === 'increment') {
        //as in react we do not directly modify the state without setState here we will do it by
        //creating copy of the state using spread operators
        newState.counter = newState.counter + action.val
    }

    if (action.type === 'decrement') {
        //as in react we do not directly modify the state without setState here we will do it by
        //creating copy of the state using spread operators
        newState.counter = newState.counter - action.val
    }
    return newState
}

const store = createStore(myReducer)
store.subscribe(() => {
    console.log("Notified automatically that state is changed:- " + JSON.stringify(store.getState()))
})
//console.log(store.getState())
store.dispatch({ type: 'increment', val: 10 })
//console.log(store.getState())
store.dispatch({ type: 'decrement', val: 10 })
//console.log(store.getState())