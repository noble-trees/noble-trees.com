import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({

  urlForFindAll(modelName, snapshot) {
    // HACK: The WP REST API doesn't allow for querying by slug.
    return this._super('page', snapshot) + '?parent=62&_embed';
  },

  urlForFindRecord(id, modelName, snapshot) {
    return this._super(id, 'page', snapshot).replace(id, '?filter[name]=' + id);
  },

  urlForQuery(query) {
    return this._super(query, 'page');
  },

  findHasMany(store, snapshot, url, { type }) {
    // HACK: For some reason, these results come back with the type of
    // 'attachment', which ED maps to 'gallery'.
    return this._super(...arguments).then(results => results.map(r => ({ ...r, type })));
  },

  handleResponse(status, headers, payload, requestData) {
    payload.forEach(gallery => {
      gallery.links = {
        images: Ember.get(gallery, '_links.wp:attachment.firstObject.href')
      };
      gallery.type = 'gallery';
      let featuredImage = Ember.get(gallery, '_embedded.wp:featuredmedia.firstObject');
      if (featuredImage) {
        // NOTE: ED doesn't _need_ 'type', but I prefer the explicitness.
        featuredImage.type = 'media';
        gallery.featuredImage = featuredImage;
      }
      return gallery;
    });
    return this._super(status, headers, payload, requestData);
  }

});
