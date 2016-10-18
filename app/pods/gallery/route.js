import Ember from 'ember';

export default Ember.Route.extend({

  model({ gallery_slug }) {
    return this.store.findRecord('gallery', gallery_slug);
  }

});
