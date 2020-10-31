const express = require('express')
const router = express.Router();
const dataController = require('../controller/data')

router.route('/getCities').get(dataController.getCities)
router.route('/getCompanyData').get(dataController.getCompanyData)

module.exports = router