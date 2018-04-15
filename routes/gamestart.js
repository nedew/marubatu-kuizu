const express = require('express');
const router = express.Router();
// const qa = require('./questions');


/* 問題画面へ */
router.get('/', (req, res, next) => {
  res.render('marubatu');
});




module.exports = router;