import {
  createStore,
  applyMiddleware
} from 'redux';

const logger = store => next => action => {
  next(action);
  console.log(action);

};

function reducer(state = {}, action){
  if(action.type == 'Billy' && action.payload == 'Strings'){
    action.type = 'Wild Bill';
    action.payload = 'Strang';
  }
  return state;

}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({
  type: 'Billy',
  payload: 'Strings'
});

