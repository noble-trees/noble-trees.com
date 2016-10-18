import Ember from 'ember';

export default Ember.Route.extend({

  model({ gallery_slug: name }) {
    // HACK: The WP serializer doesn't support single responses. >:(
    return this.store.query('gallery', { filter: { name } })
      .then(galleries => galleries.get('firstObject'));
  }

});
