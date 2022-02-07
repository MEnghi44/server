const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "km",
});

app.get("/km", (req, res) => {
    db.query("SELECT * FROM group_project", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.listen(3000, () => {
    console.log("Yey, your server is running on port 3000");
});