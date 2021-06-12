const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


// GET
router.get('/', (req, res) => {
    QT = 'SELECT * FROM "feedback"'
    pool.query(QT)
    .then(result => {
        res.send(result.rows)  
    })
    .catch(error => {
        console.log('in fb-router, GET error:', error);
        res.sendStatus(500)  
    })  
})

// POST
router.post('/', (req,res) => {
// sanitize, use object model 
let feedback = req.body

QT = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)'

pool.query(QT, [feedback.feeling, feedback.understanding, feedback.supported, feedback.comments])
.then(result => {
  res.sendStatus(201);
})
.catch(error => {
  console.log(`Error POSTing: `, error);
  res.sendStatus(500);
})
})

module.exports = router;