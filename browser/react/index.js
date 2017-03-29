import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';


ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/Albums" component={Albums} />
        <Route path="/Album/:albumId" component={Album} />
        <Route path="/Artists" component={Artists} />
        <Route path="/Artist/:artistId" component={Artist}>
          <Route path="/Artist/:artistId/albums" component={Albums} />
          <Route path="/Artist/:artistId/songs" component={Songs} />
        </Route>
        <IndexRedirect to="/Albums" />
      </Route>
    </Router>
  </div>,
document.getElementById('app')
);
