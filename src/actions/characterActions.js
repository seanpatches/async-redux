import { fetchAvatar } from '../services/fetchAvatar';
import { createAction } from 'promise-middleware-redux';

export const [
  getCharacterList, //name of action creator
  GET_CHARACTERLIST, //action
  CHARACTER_LOADING, //action pending
  GET_CHARACTERSLIST_FULFILLED, //action fulfilled
  GET_CHARACTER_ERROR //action rejected
] = createAction('GET_CHARACTERSLIST', fetchAvatar); //'string title', function
