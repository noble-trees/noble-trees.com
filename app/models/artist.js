import DS from 'ember-data';
import Ember from 'ember';

const { attr } = DS;
const { computed } = Ember;
const { alias } = computed;

export default DS.Model.extend({

  firstName: attr('string'),
  avatar:    attr(),
  twitter:   attr('string'),

  avatarUrl: alias('avatar.guid'),

  url:       computed('twitter', function() {
    if (!this.get('twitter')) { return; }
    return `https://twitter.com/${this.get('twitter')}`;
  })

});
