const fastify = require('fastify')({
  logger: true
})

const {connect, newRoom, newUser} = require('./db/db')



fastify.register(require('fastify-cors'), { 
  origin: (origin, cb) => {
    if(/localhost/.test(origin)){
      //  Request from localhost will pass
      cb(null, true)
      return
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"))
  }
})

connect().catch(err => console.log(err));

fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
  try {
    var json = JSON.parse(body)
    done(null, json)
  } catch (err) {
    err.statusCode = 400
    done(err, undefined)
  }
})

fastify.get('/', async (request, reply) => {
    newThing('fgjkdhgkjd').catch(err => console.log(err));
  return { hello: 'world' }
})

//newRoom route
fastify.get('/new/room/:room/:user/:name', async (request, reply) => {
    let roomID = request.params.room;
    let user = request.params.user;
    let name = request.params.name;
    currentChatLog = []
    newRoom(roomID, name, user, currentChatLog).catch(err => console.log(err));
 reply.send(request.params)
})


fastify.post('/new/user', async (request, reply) => {
  let bod = await request.body
  console.log(bod);
  let nu = await newUser(bod.u, bod.p, bod.a).catch(err => console.log(err));
  
reply.send(bod)
})




const start = async () => {
  try {
    await fastify.listen(4001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()