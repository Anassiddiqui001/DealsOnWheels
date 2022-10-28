import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import userRoute from "./routes/userRoute.js";

const app = express();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


app.use('/api/v1',userRoute);

export default app;