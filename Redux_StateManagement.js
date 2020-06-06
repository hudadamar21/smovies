const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  name: 'Huda Damar',
  age: 21
}
// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case 'CHANGE_NAME':
          return {
            ...state,
            name: 'Baragaki'
           }
      case 'CHANGE_AGE':
        return {
          ...state,
          age: state.age + action.birthday
      }
      default:
        return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState())

// Subcription
store.subscribe(() => {
  console.log('changeState : ', store.getState())
})

// Dispacting Action
store.dispatch({type: 'CHANGE_NAME'})
store.dispatch({type: 'CHANGE_AGE', birthday: 1})
console.log(store.getState())