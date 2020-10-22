var express = require("express");
const { remove } = require("../schemas/user");
var User = require("../schemas/user");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post("/", function (req, res, next) {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.patch("/:id", function (req, res, next) {
  Comment.update({ __id: req.params.id }, { comment: req.body.comment })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error("err");
      next(arr);
    });
});

router.delete("/:id", function (req,res, nexrt)) {
  Comment.remove({__id: req.params.id})
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.error(err);
    next(arr)
  })
}

module.exports = router;
