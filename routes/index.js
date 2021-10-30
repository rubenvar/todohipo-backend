async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('tips');

  fastify.get('/', async (request, reply) => ({ root: true }));

  fastify.get('/tips', async (request, reply) => {
    const result = await collection.find().toArray();
    if (result.length === 0) {
      throw new Error('No documents found');
    }
    return result;
  });
}

module.exports = routes;
