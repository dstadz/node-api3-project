const express = require('express');
const db = require('./userDb')
const router = express.Router();

router.post('/', (req, res) => {
  db.get()
  .then(posts => {res.status(200).json(posts)})
  .catch(err =>{res.status(500)})
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  db.get()
  .then(posts => {res.status(200).json(posts)})
  .catch(err =>{res.status(500)})
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
