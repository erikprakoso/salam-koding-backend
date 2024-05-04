'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
    async findArticles(ctx) {
        try {
            const entries = await strapi.entityService.findMany('api::article.article', {
                sort: { createdAt: 'desc'},
                limit: 10,
                populate: ['tags', 'thumbnail'],
            }
            );

            if (entries.length === 0) {
                ctx.status = 404;
                ctx.body = {
                    data: {},
                    error: {
                        status: 404,
                        name: "Not Found",
                        message: "Articles not found",
                        details: {}
                    }
                };
                return;
            }

            ctx.status = 200;
            ctx.body = {
                data: {
                    attributes: entries,
                    error: {}
                }
            };
        } catch (error) {
            ctx.status = 500;
            ctx.body = {
                data: {},
                error: {
                    status: 500,
                    name: "Internal Server Error",
                    message: error.message,
                    details: error
                }
            };
        }
    },

    async findArticleById(ctx) {
        try {
            const { id } = ctx.params;

            const entry = await strapi.entityService.findOne('api::article.article', id , {
                populate: ['tags', 'thumbnail'],
            });

            if (!entry) {
                ctx.status = 404;
                ctx.body = {
                    data: {},
                    error: {
                        status: 404,
                        name: "Not Found",
                        message: "Article not found",
                        details: {}
                    }
                };
                return;
            }

            ctx.status = 200;
            ctx.body = {
                data: {
                    attributes: entry,
                    error: {}
                }
            };
        } catch (error) {
            ctx.status = 500;
            ctx.body = {
                data: {},
                error: {
                    status: 500,
                    name: "Internal Server Error",
                    message: error.message,
                    details: error
                }
            };
        }
    },

    async findArticlesPaginate(ctx) {
        try {
            const { page, pageSize } = ctx.query;
    
            // Mengonversi nilai 'page' dan 'pageSize' menjadi tipe data numerik
            const pageNumber = parseInt(page);
            const limitNumber = parseInt(pageSize);
    
            // Memeriksa apakah 'page' dan 'limit' valid
            if (isNaN(pageNumber) || isNaN(limitNumber)) {
                ctx.status = 400;
                ctx.body = {
                    data: {},
                    error: {
                        status: 400,
                        name: "Bad Request",
                        message: "Invalid page or limit value",
                        details: {}
                    }
                };
                return;
            }
    
            const entries = await strapi.entityService.findMany('api::article.article', {
                sort: { createdAt: 'desc' },
                start: (pageNumber - 1) * limitNumber,
                limit: limitNumber,
                populate: ['tags', 'thumbnail'],
            });
    
            if (entries.length === 0) {
                ctx.status = 404;
                ctx.body = {
                    data: {},
                    error: {
                        status: 404,
                        name: "Not Found",
                        message: "Articles not found",
                        details: {}
                    }
                };
                return;
            }
    
            ctx.status = 200;
            ctx.body = {
                data: {
                    attributes: entries,
                    error: {}
                },
                meta: {
                    pagination: {
                        page: pageNumber,
                        pageSize: limitNumber,
                        pageCount: Math.ceil(entries.length / limitNumber),
                        total: entries.length
                    }
                }
            };
        } catch (error) {
            ctx.status = 500;
            ctx.body = {
                data: {},
                error: {
                    status: 500,
                    name: "Internal Server Error",
                    message: error.message,
                    details: error
                }
            };
        }
    }
    
}));
