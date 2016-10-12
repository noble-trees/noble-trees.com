import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  shouldBackgroundReloadAll() {
    return false;
  }

});
