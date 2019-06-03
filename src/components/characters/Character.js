import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }){
  return (
    <section>
      <h1>{character.name}</h1>
      <img src={character.image} />
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
