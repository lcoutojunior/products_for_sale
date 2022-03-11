import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

export default app;