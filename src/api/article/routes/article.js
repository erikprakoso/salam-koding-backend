'use strict';

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article');

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/v1/articles',
            handler: 'api::article.article.find',
        },
        {
            method: 'GET',
            path: '/v1/articles/:id',
            handler: 'api::article.article.findOne',
        },
        {
            method: 'POST',
            path: '/v1/articles',
            handler: 'api::article.article.create',
        },
        {
            method: 'PUT',
            path: '/v1/articles/:id',
            handler: 'api::article.article.update',
        },
        {
            method: 'DELETE',
            path: '/v1/articles/:id',
            handler: 'api::article.article.delete',
        }
    ]
};