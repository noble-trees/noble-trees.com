import WordPressAdapter from 'ember-wordpress/adapters/wordpress';

export default WordPressAdapter.extend({

  shouldBackgroundReloadAll() {
    return false;
  }

});
