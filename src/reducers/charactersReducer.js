import { GET_CHARACTERLIST, GET_CHARACTER_ERROR, CHARACTER_LOADING } from '../actions/characterActions';

const initialState = {
  charactersList: [],
  loading: false,
  error: null
};

export default function characterReducer(state = initialState, action) {
  switch(action.type){
    case GET_CHARACTERLIST: {
      return { ...state, charactersList: action.payload, loading: false };
    }
    case GET_CHARACTER_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case CHARACTER_LOADING: {
      return { ...state, loading: true };
    }
    default: return state;
  }
}
