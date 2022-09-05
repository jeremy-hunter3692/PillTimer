const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
// /Users/jeremyhunter/Documents/Coding/DevAcademy/BootCamp/week4/ferrous-felines/knexfile.js
// /Users/jeremyhunter/Documents/Coding/DevAcademy/BootCamp/week4/ferrous-felines/server/db

function getAllSessions(db = connection) {
  return db('sessions').select()
}

function getSessionById(id, db = connection) {
  return db('sessions').where('id', id).select().first()
}

function addSession(info, db = connection) {
  console.log('from db', info)
  return db('sessions').insert(info)
}

module.exports = {
  addSession,
  getSessionById,
  getAllSessions,
}
