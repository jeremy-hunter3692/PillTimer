const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllSessions(db = connection) {
  return db('sessions').join('students', 'student_id', 'students.id')
}

function getSessionById(id, db = connection) {
  return db('sessions').where('id', id).select().first()
}

function addSession(info, db = connection) {
  return db('sessions').insert(info)
}

module.exports = {
  addSession,
  getSessionById,
  getAllSessions,
}
