import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
const port = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.listen(port, console.log(`Server is running on port ${port}`));
