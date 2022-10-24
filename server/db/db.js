const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllSessions(db = connection) {
  return db('sessions').join('students', 'student_id', 'students.id').select()
}

function getLastSessionById(id, db = connection) {
  return db('sessions')
    .where('sessions.student_id', id)
    .join('students', 'student_id', 'students.id')
    .then((ids) => ids[ids.length - 1])
}

function getSessionById(id, db = connection) {
  return db('sessions').where('id', id).select().first()
}

function addSessions(info, db = connection) {
  return db('sessions').insert(info)
}

function getAllStudents(db = connection) {
  return db('students').select()
}

module.exports = {
  addSessions,
  getSessionById,
  getAllSessions,
  getLastSessionById,
  getAllStudents,
}
