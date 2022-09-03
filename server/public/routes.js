const express = require('express')

const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllSessions()
    .then((sesh) => {
      res.send(sesh)
    })
    .catch((err) => {
      console.error(err, 'no good')
    })
})

router.post('/', (req, res) => {
  const session = req.body
  console.log('routes fired', req.body)
  db.addSession(session)
    .then((session) => {
      res.send(session)
      console.log('db addsession', session)
    })
    .catch((err) => {
      console.error(err, 'no good')
    })
})

module.exports = router
