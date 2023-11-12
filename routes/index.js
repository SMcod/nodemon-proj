var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  res.render("home", { title: "Home" });
});
/* GET home page. */
router.get("/Home", function (req, res, next) {
  res.render("home", { title: "Home" });
});
/* GET about page. */
router.get("/About", function (req, res, next) {
  res.render("about_me", { title: "About" });
});
/* GET projuct page. */
router.get("/project", function (req, res, next) {
  res.render("project", { title: "project" });
});
/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact_me", { title: "Contact" });
});
module.exports = router;
