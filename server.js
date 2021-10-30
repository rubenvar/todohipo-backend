const fastify = require('fastify')({ logger: true });

fastify.register(require('./lib/db'));
fastify.register(require('./routes'));

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
