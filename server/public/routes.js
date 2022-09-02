const express = require('express')

const router = express.Router()

router.post('/api/v1/sessions', (req, res) => {
  res.send('WOMBLES!')
})

module.exports = router