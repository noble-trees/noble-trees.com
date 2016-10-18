import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  title:         attr('string'),
  slug:          attr('string'),
  featuredImage: belongsTo('media')
});
