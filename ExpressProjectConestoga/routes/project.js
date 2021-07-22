const express = require('express')

const router = express.Router();

router.get('/', (req,res,next) => {
    res.render('project/index', { title:'My projects' })
})

module.exports = router;