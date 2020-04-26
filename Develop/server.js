// dependencies
const express = require("express");

// create express server and set up port
const app = express();
const PORT = process.env.PORT || 4000;

// handle parseing with express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(express.static("db"));

// require routes files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});