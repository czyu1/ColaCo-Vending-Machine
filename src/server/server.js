import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./src/client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
