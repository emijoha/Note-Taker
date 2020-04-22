// dependencies
const express = require("express");
const path = require("path");

// create express server and set up port
const app = express();
const PORT = process.env.PORT || 4000;

// handle parseing with express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// require routes files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });