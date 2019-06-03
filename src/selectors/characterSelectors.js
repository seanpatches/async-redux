export const getCharacters = state => state.characters.charactersList;
export const getCharactersError = state => state.characters.error;
export const getCharactersLoading = state => state.characters.loading;

export const getDetail = (state, name) => {
  return state.characters.charactersList.find(entry => {
    return entry.name === name;
  });
};
