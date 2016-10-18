import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({

  urlForFindAll(modelName, snapshot) {
    // HACK: The WP REST API doesn't allow for querying by slug.
    return this._super('page', snapshot) + '?parent=62&_embed';
  },

  urlForQuery(query) {
    return this._super(query, 'page');
  },

  handleResponse(status, headers, payload, requestData) {
    payload.forEach(gallery => {
      gallery.type = 'gallery';
      let featuredImage = Ember.get(gallery, '_embedded.wp:featuredmedia.firstObject');
      if (featuredImage) {
        // NOTE: ED doesn't _need_ 'type', but I prefer the explicitness.
        featuredImage.type = 'media';
        gallery.featured_image = featuredImage;
      }
      return gallery;
    });
    return this._super(status, headers, payload, requestData);
  }

});
