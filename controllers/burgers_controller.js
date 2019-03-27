var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
}); 


router.post("/api/addburger", function(req, res) {
  console.log("hit" + JSON.stringify(req.body));
  console.log("hit" + JSON.stringify("lllamo=" + req.body.name));
  burger.create([
    "text", "eaten"
  ], [
    req.body.name, false
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});



console.log("after");
router.put("/api/devour/:id", function(req, res) {
  console.log("put devour hit");
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    eaten: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
