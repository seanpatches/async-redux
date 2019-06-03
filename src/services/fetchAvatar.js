export const fetchAvatar = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) 'Unable to acquire character list';

      return json;
    })
    .then(json => json.map(character => ({
      name: character.name,
      image: character.photoUrl,
      id: character._id,
      affiliation: character.affiliation
    })));
};

