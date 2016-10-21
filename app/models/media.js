import DS from 'ember-data';
import Ember from 'ember';

const { attr } = DS;
const { alias } = Ember.computed;

export default DS.Model.extend({

  slug:         attr('string'),
  link:         attr('string'),
  mediaDetails: attr(),
  sourceUrl:    attr('string'),

  thumbnailUrl: alias('mediaDetails.sizes.thumbnail.source_url'),
  fullUrl:      alias('mediaDetails.sizes.full.source_url')

});
