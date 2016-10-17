import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('gallery', { path: 'gallery/:gallery_slug' });
  this.route('artists');
  this.route('shows');
});

export default Router;
