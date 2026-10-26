import express from "express";
const APP = express();
APP.get("/api/user", function (req, res) {
  res.send(["Om", "Yash", "chirag"]);
});
APP.listen(4002, function () {
  console.log("Application Started");
});
//http://localhost:4002/api/user
APP.post("/api/user/add", function (req, res) {
  res.send({ msg: "user added" });
});
APP.put("/api/user/update", function (req, res) {
  res.send({ msg: "user updates" });
});
APP.delete("/api/user/delete", function (req, res) {
  res.send({ msg: "user delete" });
});
