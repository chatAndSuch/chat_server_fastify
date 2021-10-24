const fastify = require('fastify')({
  logger: true
})

const {connect, newRoom} = require('./db/db')


connect().catch(err => console.log(err));

fastify.get('/', async (request, reply) => {
    newThing('fgjkdhgkjd').catch(err => console.log(err));
  return { hello: 'world' }
})

//newRoom route
fastify.get('/new/:room/:user/:name', async (request, reply) => {
    let roomID = request.params.room;
    let user = request.params.user;
    let name = request.params.name;
    currentChatLog = []
    newRoom(roomID, name, user, currentChatLog).catch(err => console.log(err));
 reply.send(request.params)
})




const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()