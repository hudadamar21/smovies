import {createStore} from 'react-hooks-global-state';

const reducer = (state, action) => {
  switch (action.type){
    case 'SetKeyword' : return {...state, keyword: action.value}
    case 'SetImdbID' : return {...state, imdbID: action.value}
    case 'SetIsDetail' : return {...state, isDetail: action.value}
    default: return state;
  }
};

const initialState = {
            keyword: '',
            isSearch: false,
            imdbID : '',
            isDetail: false
          };

export const {dispatch, useGlobalState} = createStore(reducer, initialState);

