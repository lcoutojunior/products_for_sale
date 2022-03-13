import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());

app.use(routes);

let port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;