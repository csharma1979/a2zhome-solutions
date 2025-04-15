const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema({
  blogTopic: {
    type: String,
    required: false,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    //required: true,
  },
  blogCategory: {
    type: String,
    required: false,
    trim: true,
  },
  keywords: {
    type: [String],
    required: false,
  },
  uploadImage: {
    type: String,
    required: false,
  },
  videoUrl: {
    type: String,
    required: false,
  },
  blogDescription: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
    default: "Draft",
  },
  publishedBy: {
    type: String,
    default: "Admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});


// Middleware to update the slug and updatedAt field

blogSchema.pre("save", function (next) {
  if (this.isModified("blogTopic")) {
    this.slug = slugify(this.blogTopic, { lower: true, strict: true });
    //console.log("Slug generated:", this.slug); 
  }
  this.updatedAt = Date.now();
  next();
});


//const Blog = mongoose.model("Blog", blogSchema);
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

module.exports = Blog;
