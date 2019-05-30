import { connect } from 'react-redux';
import { getDetail } from '../selectors/characterSelectors';
import CharacterDetail from '../components/characters/CharacterDetail';

const mapStateToProps = (state, props) => ({
  character: getDetail(state, props.match.params.name)
});

export default connect(
  mapStateToProps,
  null
)(CharacterDetail);
