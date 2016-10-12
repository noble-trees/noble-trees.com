import Ember from 'ember';
import WordPressSerializer from 'ember-wordpress/serializers/wordpress';

export default WordPressSerializer.extend({

  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  }

});
