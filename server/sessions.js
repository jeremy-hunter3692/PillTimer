const express = require('express')
const router = express.Router()
const db = require('./db/db')

router.get('/', (req, res) => {
  db.getAllSessions()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getLastSessionById(id)
    .then((data) => {
      // console.log('route', data)
      res.send(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})


router.post('/', (req, res) => {
  //Matching/changing key names to databse key names
  const sessionsFiltered = req.body
  sessionsFiltered.forEach((x) => {
    x.student_id = Number(x.studentId)
    x.teacher_id = Number(x.teacherId)
    delete x.name
    delete x.studentId
    delete x.teacherId
    delete x.instrument
    delete x.title
  })
  db.addSessions(sessionsFiltered)
    .then((sessions) => {
      res.send(sessions)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong not added' })
    })
})

module.exports = router
