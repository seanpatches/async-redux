import React, { PureComponent } from 'react';
import { getCharacterList } from '../actions/characterActions';
import Characters from '../components/characters/Characters';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCharacters, getCharactersError, getCharactersLoading } from '../selectors/characterSelectors';

class AllCharacters extends PureComponent{
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount(){
    this.props.fetch();
  }

  render(){
    const { characters, loading } = this.props;
    if(loading) return <h2>LOADING</h2>;
    return <Characters characters={characters} />;
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(){
    dispatch(getCharacterList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
