'use strict';

/**
 * author router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::author.author');

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/v1/authors',
            handler: 'api::author.author.find',
        },
        {
            method: 'GET',
            path: '/v1/authors/:id',
            handler: 'api::author.author.findOne',
        },
        {
            method: 'POST',
            path: '/v1/authors',
            handler: 'api::author.author.create',
        },
        {
            method: 'PUT',
            path: '/v1/authors/:id',
            handler: 'api::author.author.update',
        },
        {
            method: 'DELETE',
            path: '/v1/authors/:id',
            handler: 'api::author.author.delete',
        }
    ]
};