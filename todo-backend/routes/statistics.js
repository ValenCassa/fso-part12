const { getAsync } = require("../redis");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const added_todos = await getAsync("added_todos");
  res.send({
    added_todos: parseInt(added_todos) || 0,
  });
});

module.exports = router;
