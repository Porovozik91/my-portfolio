/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async find(ctx) {
    const { data } = await super.find(ctx);
    return await strapi.entityService.findOne('api::home-page.home-page', data.id, {
      populate: ['profileImage', 'backgroundImage'], // Populer begge bildene
    });
  },
}));
