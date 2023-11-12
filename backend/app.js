const config = require("./config.js");   // to import configurations
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes.js");
const examRoutes = require("./routes/examRoutes.js");
const testRoutes = require("./routes/testRoutes.js");

const app = express();         // to create an instance of express app
app.use(express.json());      // to support JSON-encoded bodies
app.use(cors());              // to allow cross-origin requests
app.use(express.urlencoded({ extended: true }));          // to support URL-encoded bodies
app.use(morgan('dev'));               // to log HTTP requests
app.use(cookieParser());                // to parse cookies

app.get("/", (req,res) => {
  res.json({message: "Welcome to the Examania application."});
});

// routes
app.use("/api/auth",authRoutes);                       // to use authRoutes
app.use("/api", examRoutes);                      // to use examRoutes
app.use("/api/test", testRoutes);                      // to use testRoutes

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});                                                // to start the server