const express = require('express');
const userRouter = require('./users/userRouter.js')
const server = express();



//endpoints
server.use('/api/users',logger, userRouter)

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(req.method,req.url, Date.now())
  next()
}

module.exports = server;
