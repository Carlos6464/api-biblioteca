import express from 'express';
import routes from './routes/index.routes';

import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
