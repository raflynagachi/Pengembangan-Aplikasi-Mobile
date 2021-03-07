const redux = require('redux');
const createStore = redux.createStore;

initialState = {
    value: 0,
    age: 17
}

//reducer
const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_AGE': 
            return {
            ...state,
            age: state.age + 1
            }
        default: return state;
    }
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//dispatch
store.dispatch({type: 'ADD_AGE'})
console.log(store.getState())

//subsription
store.subsribe(() => {
    console.log('State change: ', store.getState())
})