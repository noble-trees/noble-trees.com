import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('galleries', { path: '/' }, function() {
    this.route('gallery', { path: 'gallery/:gallery_slug' }, function() {
      this.route('zoom', { path: ':slug' });
    });
  });
  this.route('artists');
  this.route('shows');
  this.route('loading');
});

export default Router;
