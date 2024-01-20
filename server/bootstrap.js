'use strict';

module.exports = ({ strapi }) => {

  const generateBlurBase64 = async (event, eventType) => {
    const { data, where } = event.params;

    if ((data.mime && data.mime.startsWith('image/'))) {
      data.blurBase64 = await strapi.plugin('strapi-blurbase64').service('blurBase64').generateBlurBase64(data.url);
    }

    if (eventType === 'beforeUpdate' && strapi.plugin('strapi-blurbase64').config('regenerateOnUpdate') === true) {
      const fullData = await strapi.db.query('plugin::upload.file').findOne({
        select: ['url', 'blurBase64', 'name', 'mime'],
        where
      })

      if ((fullData.mime && fullData.mime.startsWith('image/')) && !fullData.blurBase64) {
        data.blurBase64 = await strapi.plugin('strapi-blurbase64').service('blurBase64').generateBlurBase64(fullData.url);
      }
    }
  };

  strapi.db.lifecycles.subscribe({
    models: ['plugin::upload.file'],
    beforeCreate: (event) => generateBlurBase64(event, 'beforeCreate'),
    beforeUpdate: (event) => generateBlurBase64(event, 'beforeUpdate'),
  });
};
