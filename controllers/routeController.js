// Start our router
// Import express
const express = require('express')
// only the router none of the other app stuff
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const apiController = require('./apiController')

// API Routes
// Index
router.get('/api', dataController.index, apiController.index)
// Delete
router.delete('/api/:id', dataController.destroy, apiController.show)
// Update
router.put('/api/:id', dataController.update, apiController.show)
// Create
router.post('/api', dataController.create, apiController.show)
// Show
router.get('/api/:id', dataController.show, apiController.show)

// Non API Routes
// user logged in
// login page
router.get('/signup', viewController.signup)
router.post('/newuser', dataController.newUser, viewController.redirectUser)
router.get('/login', viewController.login)

router.post('/auth', dataController.auth, viewController.redirectUser)

// personal index
router.get('/myIndex/:uid', dataController.myIndex, viewController.myIndex)
// New
router.get('/:uid/new', dataController.newBlog, viewController.newView)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectShow)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// show my blog
router.get('/my/:id', dataController.show, viewController.myShow)


// public section

// Index
router.get('/', dataController.index, viewController.index)

// Show
router.get('/:id', dataController.show, viewController.show)

module.exports = router