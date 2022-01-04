require("dotenv").config();
const express = require("express");
const schema = require("./GraphQL/schema");
const { graphqlHTTP } = require("express-graphql");
const resolver = require("./GraphQL/resolver");
const cors = require("cors");

const mongoose = require("mongoose");

const UserAccountRouter = require("./Routes/UserAccount");
const authUserAccount = require("./Middleware/authUserAccount");

const startServer = async () => {
    const root = resolver;

    const app = express();

    app.use(express.json());

    app.use(cors());

    app.use("/auth", UserAccountRouter);

    app.use(authUserAccount);

    app.use(
        "/graphql",
        graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: true,
        })
    );

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to Mongo DB");

    const port = process.env.PORT || 4000;
    app.listen(port);
    console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
};

startServer();
