import { fetchAvatar } from '../services/fetchAvatar';
import { createAction } from 'promise-middleware-redux';
// export const GET_CHARACTERLIST = 'GET_CHARACTERLIST';
// export const GET_CHARACTER_ERROR = 'GET_CHARACTER_ERROR';
// export const CHARACTER_LOADING = 'CHARACTER_LOADING';

export const [
  getCharacterList, //name of action creator
  GET_CHARACTERLIST, //action
  CHARACTER_LOADING, //action pending
  GET_CHARACTERSLIST_FULFILLED, //action fulfilled
  GET_CHARACTER_ERROR //action rejected
] = createAction('GET_CHARACTERSLIST', fetchAvatar); //'string title', function
