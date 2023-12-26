const express = require("express");
const app = express();
const cors = require("cors");
// const routes = require("./routes");
const authRoutes = require("./routes/auth");
const connectDB = require("./utils/db");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/", authRoutes);

const PORT = 8000 || process.env.PORT;

connectDB
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
  )
  .catch((err) => console.log(err));
