var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
  	type: String,
  	required: true
  },
  date: String,
  dateSaved: {
    type: Date,
    default: Date.now
  },
  url: String
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;