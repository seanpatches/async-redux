import { GET_CHARACTERLIST } from '../actions/characterActions';

const initialState = [];

export default function characterReducer(state = initialState, action) {
  switch(action.type){
    case GET_CHARACTERLIST: {
      return [...state, action.payload];
    }
    default: return state;
  }
}
