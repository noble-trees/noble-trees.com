import Ember from 'ember';

export default Ember.Controller.extend({

  zoomStyle: Ember.computed('model.media_details.sizes.full.source_url', function() {
    let url = this.get('model.media_details.sizes.full.source_url');
    return new Ember.String.htmlSafe(`background-image: url('${url}')`);
  }),

});
