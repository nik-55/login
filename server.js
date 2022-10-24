// Configuring server and database
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

require("./db/connect");

const app = express();

// Setting up the cross origin
const ALLOWED_ORIGIN = ['http://localhost:3000']
const corsOptions = {
  origin: ALLOWED_ORIGIN
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up the routes
const { routes } = require("./routes");
routes(app);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
