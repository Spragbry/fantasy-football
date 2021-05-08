const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("main", {loggedIn: req.session.loggedIn,});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {

  res.render("login");
});

router.get("/logout", (req, res) => {

  res.render("main");
});

module.exports = router;
