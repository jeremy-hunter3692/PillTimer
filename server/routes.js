const express = require('express')
const router = express.Router()
const db = require('./db/db')

router.get('/', (req, res) => {
  db.getLastSession()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.error(err, 'no good')
    })
})

router.post('/', (req, res) => {
  //Matching/changing key names to databse key names
  const session = req.body
  session.student_id = req.body.studentId
  session.teacher_id = req.body.teacherId
  delete session.name
  delete session.studentId
  delete session.teacherId
  db.addSession(session)
    .then(() => {
      res.send(session)
    })
    .catch((err) => {
      console.error(err, 'no good')
    })
})

module.exports = router
