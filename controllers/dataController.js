const Blog = require('../models/blog')
const User = require('../models/user')

const dataController = {
  // MyIndex
  myIndex (req, res, next) {
    Blog.find({'userID':req.params.uid}, (err, foundBlogs) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.uid = req.params.uid
        res.locals.data.blogs = foundBlogs
        next()
      }
    })
  },
  newBlog (req, res, next) {
    res.locals.data.uid = req.params.uid
    next()
  },
  // Index,
  index (req, res, next) {
    Blog.find({'public':true}, (err, foundBlogs) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.blogs = foundBlogs
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Blog.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.blog = deletedBlog
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.public = req.body.public === 'on'
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBlog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.blog = updatedBlog
        next()
      }
    })
  },
  // Create
  newUser (req, res, next) {
    User.create(req.body, (err, createdUser) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.user = createdUser
        next()
      }
    })
  },
  auth (req, res, next) {
    User.findOne({'userName':req.body.userName,'password':req.body.password}, (err, foundUser) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a User with that ID'
        })
      } else {
        // res.send(foundUser)
        res.locals.data.user = foundUser
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.public = req.body.public === 'on'
    Blog.create(req.body, (err, createdBlog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.blog = createdBlog
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Blog.findById(req.params.id, (err, foundBlog) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a blog with that ID'
        })
      } else {
        res.locals.data.blog = foundBlog
        next()
      }
    })
  }
}

module.exports = dataController
