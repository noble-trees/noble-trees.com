import DS from 'ember-data';

// NOTE: We can't use ApplicationSerializer because we want to skip its
// 'normalizeSingleResponse' funciton entirely.
export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

  primaryKey: 'slug',

  attrs: {
    featuredImage: { embedded: 'always' }
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, { gallery: payload[0] }, payload[0].id, requestType);
  },

  // NOTE: Taken from wordpress-serializer directly since we're replacing it.
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const payloadTemp = {};
    const rootKey = Ember.String.pluralize(primaryModelClass.modelName);

    payloadTemp[rootKey] = payload;

    return this._super(store, primaryModelClass, payloadTemp, id, requestType);
  },

  // NOTE: Taken from wordpress-serializer directly since we're replacing it.
  normalize(modelClass, resourceHash, prop) {
    // As you get bored typing `title.rendered`, here we move the `rendered` part up.
    if (resourceHash.content && resourceHash.title.rendered) {
      resourceHash.content = resourceHash.content.rendered;
      resourceHash.title = resourceHash.title.rendered;
    }
    if (resourceHash.title && resourceHash.title.rendered) {
      resourceHash.title = resourceHash.title.rendered;
    }
    if (resourceHash.excerpt && resourceHash.excerpt.rendered) {
      resourceHash.excerpt = resourceHash.excerpt.rendered;
    }
    return this._super(modelClass, resourceHash, prop);
  }

});
