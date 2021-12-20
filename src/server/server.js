import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes/api.js';

dotenv.config();

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use('/build', express.static(path.join('./build')));

app.get('/', (req, res) => {
  res
    .status(200)
    .setHeader('content-type', 'text/html; charset=UTF-8')
    .sendFile(path.resolve('./src/client/index.html'));
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
