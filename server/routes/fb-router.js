const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
  QT = 'SELECT * FROM "feedback" ORDER BY "date" DESC '
  pool.query(QT, [])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log('in fb-router, GET error:', error);
      res.sendStatus(500)
    })
})

// POST
router.post('/', (req, res) => {
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

// PUT 
router.put('/:id', (req, res) => {
  console.log('got to put', req.params.id);

  QT = 'UPDATE "feedback" SET flagged = TRUE WHERE id = $1; ';
  pool.query(QT, [req.params.id])
    .then(result => {
      res.sendStatus(200)
    })
    .catch(error => {
      console.log('error in put', error);

      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  console.log('got to delete', req.params.id);

  QT = 'DELETE FROM "feedback" WHERE id = $1;';
  pool.query(QT, [req.params.id])
  .then(result => {
    res.sendStatus(200)
  })
  .catch(error => {
    console.log('error in del', error);

    res.sendStatus(500)
  })
})
  


module.exports = router;