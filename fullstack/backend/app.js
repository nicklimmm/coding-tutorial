const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const db = require("./models");
const cors = require("cors");

const app = express();

app.use(express.json());

// Handle CORS
const whitelist = ["http://localhost:3000"]; // lists of allowed domains
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// Routers
app.use("/users", users);
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = app.listen(8000, "127.0.0.1", async () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);

  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await db.sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    console.log("------------------\n");
  }
});
