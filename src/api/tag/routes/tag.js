'use strict';

/**
 * tag router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tag.tag');

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/v1/tags',
            handler: 'api::tag.tag.find',
        },
        {
            method: 'GET',
            path: '/v1/tags/:id',
            handler: 'api::tag.tag.findOne',
        },
        {
            method: 'POST',
            path: '/v1/tags',
            handler: 'api::tag.tag.create',
        },
        {
            method: 'PUT',
            path: '/v1/tags/:id',
            handler: 'api::tag.tag.update',
        },
        {
            method: 'DELETE',
            path: '/v1/tags/:id',
            handler: 'api::tag.tag.delete',
        }
    ]
};