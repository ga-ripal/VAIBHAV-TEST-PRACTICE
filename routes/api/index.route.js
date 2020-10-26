const express = require('express')
const router = express.Router()
router.use('/api', require('../api/api.route'))
module.exports = router