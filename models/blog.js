const mongoose = require('mongoose')

// Make A Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: String,
  publishDate: Date,
  public: Boolean,
  userID: { type: String, required: true }
})

// Make A Model From The Schema

const Blog = mongoose.model('Blog', blogSchema)

// Export The Model For Use In The App

module.exports = Blog
