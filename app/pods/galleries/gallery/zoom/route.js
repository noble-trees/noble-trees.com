import Ember from 'ember';
import config from 'ember-get-config';

export default Ember.Route.extend({

  model({ slug }) {
    return Ember.$.getJSON(`${config.wordpressHost}/wp-json/wp/v2/media?filter[name]=${slug}`);
  },

  setupController(controller, model) {
    return this._super(controller, model[0]);
  }

});
