require('dotenv').config({});
const fastify = require('fastify')({ logger: true });

fastify.register(require('./lib/db'));
fastify.register(require('./routes'));

const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
// Server is now listening on ${address}
