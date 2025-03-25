let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.set({
//     "Cache-Control": "no-store, no-cache, must-revalidate",
//     Pragma: "no-cache",
//     Expires: new Date("01.01.2000"),
//   });
//   next();
// });
app.use((req, res, next) => {
  // Only apply strict no-cache to HTML files
  if (req.path.endsWith('.html') || req.path === '/' || !req.path.includes('.')) {
    res.set({
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Pragma: "no-cache",
      Expires: new Date("01.01.2000"),
    });
  } else {
    // For static assets (CSS, JS, images), enable caching with a long max-age
    res.set({
      "Cache-Control": "public, max-age=31536000",
    });
  }
  next();
});
app.set("etag", false);

const path = require("path");
const fs = require("fs");

let serveFolder = "build";
app.use("/", express.static(serveFolder + "/"));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: serveFolder + "/" });
});
var port = 9090;
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
