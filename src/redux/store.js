import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const FETCH_DATA = 'FETCH_DATA';
const FAIL_FETCH = 'FAIL_FETCH';

const initialState = {
  isLoading: true,
  message: '',
  movies: []
};

const dispatchFetchData = data => {
  // console.log(data);
  return {
    type: FETCH_DATA,
    isLoading: false,
    message: '',
    movies: data
  };
};

const dispatchFailFetch = () => {
  return {
    type: FAIL_FETCH,
    isLoading: false,
    message: 'There is an error occured. Please try it again.'
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: action.isLoading,
        message: action.message,
        movies: action.movies
      };
    case FAIL_FETCH:
      return {
        ...state,
        isLoading: action.isLoading,
        message: action.message
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export const actionCreators = {
  dispatchFetchData,
  dispatchFailFetch
};

export default store;
