const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const graphqlHTTP = require('express-graphql');

const graphqlResolver = require('./graphql/resolver')
const graphqlSchema = require('./graphql/schema')

const app = express();

mongoose.connect(`mongodb+srv://${process.env.NOSQL_USER}:${process.env.NOSQL_PWD}@${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));

app.listen(3030, () => {
    console.log(`listen on http://localhost:3030`);}
);