const express = require('express')
const router = express.Router()
const pictogramsController = require('../controllers/pictogramController')

router.route('/:pictogram')
  .get(pictogramsController.getOnePictogram)
module.exports = router
