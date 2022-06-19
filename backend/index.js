const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//3000を開かれたらメッセージを表示するようGETリクエストでルーティング
//"/"は3000ポートのトップページが開かれたら処理するということ
app.get("/", function (req, res) {
  res.send("ページが表示されました");
});

//POSTリクエストはブラウザからフォームなどの情報を送信する際に使用される
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

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log(listener.address().port);
});
