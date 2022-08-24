const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 4000, () => {
  console.log("Now listening for requests on port 4000");
});
