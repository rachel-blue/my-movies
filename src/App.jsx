import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GalleryConnect from './components/Pages/PageGallery';
import PageSearch from './components/Pages/PageSearch';
import Fav from './components/Pages/PageFav';
// eslint-disable-next-line import/extensions
import DetailsConnect from './components/Pages/PageDetails.jsx';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/fav">
            <Fav />
          </Route>

          <Route path="/search/:id">
            <PageSearch />
          </Route>

          <Route path="/details/:id">
            <DetailsConnect />
          </Route>

          <Route path="/gallery">
            <GalleryConnect />
          </Route>

          <Route path="/">
            <GalleryConnect />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
