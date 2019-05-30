import React from 'react';
import AllCharacters from '../containers/AllCharacters';
import DetailsByUrl from '../containers/DetailsByUrl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App(){
  return (
    <Router>
      <Switch>
        <Route exact path='/'component={AllCharacters}/>
        <Route  path='/:name'component={DetailsByUrl}/>
      </Switch>
    </Router>
  );
}
