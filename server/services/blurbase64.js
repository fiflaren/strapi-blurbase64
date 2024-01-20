'use strict';

const { getPlaiceholder } = require('plaiceholder');

module.exports = ({ strapi }) => ({
  async generateBlurBase64(url) {
    try {
      return (await getPlaiceholder(url)).base64;
    } catch (e) {
      strapi.log.error(e);
      return null;
    }
  },
});
