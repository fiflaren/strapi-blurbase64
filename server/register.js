'use strict';

module.exports = ({ strapi }) => {
  strapi.plugin('upload').contentTypes.file.attributes.blurBase64 = {
    type: 'text',
  };
};
