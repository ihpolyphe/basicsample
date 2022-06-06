const express = require("express");
const bodyParser = require("body-parser");
const cors = reuquire("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/test", function (req, res) {
  if (req.body.id == "test" && req.body.pass == "test") {
    res.send({
      message: "OK!",
    });
  } else {
    res.send({
      message: "認証エラー",
    });
  }
});

app.listen(process.env.PORT || 3000);
