import Ember from 'ember';

export function initialize() {
  Ember.Inflector.inflector.uncountable('media');
}

export default {
  name: 'media-name-hack',
  initialize
};
