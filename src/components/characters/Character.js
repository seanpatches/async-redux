import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ character }){
  return (
    <Link to={`/${character.name}`}>
      <h1>{character.name}</h1>
      <img src={character.image} />
    </Link>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
