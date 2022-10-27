// Import Modules and set up vars
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 8000;

//connect to database
const db = require('./models/db')
db.once('open', () => {
  console.log('connected to mongo')
});

//Initialize View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

// Mount Express Middleware
app.use((req, res, next) => {
  res.locals.data = {}
  next()
}) // Creates res.locals.data

// Middlewear that needs to be available in my routes controller
app.use(express.urlencoded({ extended: true })) // Creates req.body
// right below urlencoded
app.use(express.json());
app.use(methodOverride('_method')); // Allows us to override methods
app.use(express.static('public')); // Allows us to have Static Files

// Setting up localhost:8000/blog as the entry for my routes
app.use('/blogs', require('./controllers/routeController.js')); // Mounts our RESTFUL/INDUCES ROUTES at /fruits

// Listen on PORT
app.listen(PORT, () => {
  console.log('We in the building', PORT)
})