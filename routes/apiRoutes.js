var express = require("express");

var articlesController = require("../controllers/articlesController");

var router = new express.Router();

// Get all articles (or optionally a specific article with an id)
router.get("/saved", articlesController.find);
// Create a new article using data passed in req.body
router.post("/saved", articlesController.save);
// Delete a specific article using the id in req.params.id
router.delete("/saved", articlesController.destroy);

module.exports = router;