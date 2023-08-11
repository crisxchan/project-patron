const colors = require("colors");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
const schema = require("./schema/schema");
const connectDb = require("./config/db");

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDb();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
