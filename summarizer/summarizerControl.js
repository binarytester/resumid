const express = require("express");
const router = express.Router();

// router to save summary
router.post("/summarize", (req, res) => {
  let summarized = req.body.text;
  res.render("../views/textSummarized/newText.ejs", {
    summarized: summarized,
  });
});

module.exports = router;
