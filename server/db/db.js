const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addSession,
}

function addSession(sessionsinfo, db = connection) {
  return db('widgets').insert()
}
