import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

function CharacterDetail({ character }){
  return (
    <>
      <h1>{character.name}</h1>
      <img src={character.image} />
      <h3>{character.affiliation}</h3>
    </>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterDetail;
