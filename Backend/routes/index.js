const express = require('express')
const { complaint, contact, home, registerStudent, loginStudent } = require('../controller/controller')
const router = express.Router()


router.get('/',home)
router.post('/complaint',complaint)
router.post('/contact',contact)
router.post('/',registerStudent)
router.post('/login', loginStudent);

module.exports = {router} 