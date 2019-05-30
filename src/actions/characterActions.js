import { fetchAvatar } from '../services/fetchAvatar';
export const GET_CHARACTERLIST = 'GET_CHARACTERLIST';

export const getCharacterList = () => dispatch => {
  return fetchAvatar()
    .then(characterList => {
      dispatch({
        type: GET_CHARACTERLIST,
        payload: characterList
      });
    }); 
};
