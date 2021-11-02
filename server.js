require('dotenv').config({});
const fastify = require('fastify')({ logger: true });

fastify.register(require('./lib/db'));
fastify.register(require('./routes'));

fastify.listen(process.env.PORT, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
