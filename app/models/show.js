import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

const { attr } = DS;
const { computed } = Ember;
const { alias } = computed;

export default DS.Model.extend({
  title:        attr('string'),
  thumbnail:    attr(),
  link:         attr('string'),
  startDate:    attr('date'),

  thumbnailUrl: alias('thumbnail.guid'),
  startDateUtc: computed('startDate', function() {
    return moment.utc(this.get('startDate'), 'MM-DD-YYYY');
  }),
  url:          computed('link', function() {
    return this.get('link') || null;
  })

});
