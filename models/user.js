const mongoose = require('mongoose')

// Make A Schema
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// Make A Model From The Schema

const User = mongoose.model('User', userSchema)

// Export The Model For Use In The App

module.exports = User
