require('dotenv').config();
const fastifyPlugin = require('fastify-plugin');

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(async (fastify, options) => {
  fastify.register(require('fastify-mongodb'), {
    url: process.env.DB,
  });
});
