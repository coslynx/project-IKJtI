import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import MusicSection from './components/MusicSection';
import VideoGallery from './components/VideoGallery';
import TourDates from './components/TourDates';
import MerchandiseStore from './components/MerchandiseStore';
import ContactForm from './components/ContactForm';
import NewsletterSignup from './components/NewsletterSignup';
import PhotoGallery from './components/PhotoGallery';
import MusicPlayer from './components/MusicPlayer';
import InteractiveElements from './components/InteractiveElements';
import SearchFunctionality from './components/SearchFunctionality';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/music" component={MusicSection} />
        <Route path="/videos" component={VideoGallery} />
        <Route path="/tour" component={TourDates} />
        <Route path="/merchandise" component={MerchandiseStore} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/newsletter" component={NewsletterSignup} />
        <Route path="/photos" component={PhotoGallery} />
        <Route path="/player" component={MusicPlayer} />
        <Route path="/interactive" component={InteractiveElements} />
        <Route path="/search" component={SearchFunctionality} />
      </Switch>
    </Router>
  );
}

export default App;