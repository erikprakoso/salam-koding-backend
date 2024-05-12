'use strict';

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category');

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/v1/categories',
            handler: 'api::category.category.find',
        },
        {
            method: 'GET',
            path: '/v1/categories/:id',
            handler: 'api::category.category.findOne',
        },
        {
            method: 'POST',
            path: '/v1/categories',
            handler: 'api::category.category.create',
        },
        {
            method: 'PUT',
            path: '/v1/categories/:id',
            handler: 'api::category.category.update',
        },
        {
            method: 'DELETE',
            path: '/v1/categories/:id',
            handler: 'api::category.category.delete',
        }
    ]
};