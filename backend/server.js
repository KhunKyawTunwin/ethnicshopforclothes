require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const userRoute = require("./routes/userRoute");
const compression = require("compression");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
connectDB(); // DB Connection

// Middlewares
app.use(compression());
app.use(cors(corsOptions));
app.use(credentials);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoute);

// Error Handler
app.use(errorHandler);

// Db close
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port http://localhost:${process.env.PORT}`)
  );
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
