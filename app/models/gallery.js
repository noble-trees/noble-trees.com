import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  title:         attr('string'),
  slug:          attr('string'),
  featuredImage: belongsTo('media', { async: false }),
  images:        hasMany('media')
});
