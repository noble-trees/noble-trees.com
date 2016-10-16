import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({

  urlForFindAll(modelName, snapshot) {
    return this._super('page', snapshot) + '?parent=62&_embed';
  },

  handleResponse(status, headers, payload, requestData) {
    payload.forEach(gallery => {
      gallery.type = 'gallery';
      gallery.featured_image = Ember.get(gallery, '_embedded.wp:featuredmedia.firstObject');
      return gallery;
    });
    return this._super(status, headers, payload, requestData);
  }

});
