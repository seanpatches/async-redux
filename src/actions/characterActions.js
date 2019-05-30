import { fetchAvatar } from '../services/fetchAvatar';
import { createAction } from 'promise-middleware-redux';
// export const GET_CHARACTERLIST = 'GET_CHARACTERLIST';
// export const GET_CHARACTER_ERROR = 'GET_CHARACTER_ERROR';
// export const CHARACTER_LOADING = 'CHARACTER_LOADING';

export const [
  getCharacterList,
  GET_CHARACTERLIST,
  CHARACTER_LOADING,
  GET_CHARACTERSLIST_FULFILLED,
  GET_CHARACTER_ERROR
] = createAction('GET_CHARACTERSLIST', fetchAvatar);

// export const getCharacterList = () => dispatch => {
//   dispatch({
//     type: CHARACTER_LOADING
//   });

//   return fetchAvatar()
//     .then(characterList => {
//       dispatch({
//         type: GET_CHARACTERLIST,
//         payload: characterList
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: GET_CHARACTER_ERROR,
//         payload: err
//       });
//     });

// };
