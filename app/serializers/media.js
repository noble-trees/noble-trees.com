import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  modelNameFromPayloadKey() {
    return 'media';
  }

});
