import path from 'path';
import express from 'express';
import cors from 'cors';
import renderer from './helpers/renderer';

const app = express();
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = renderer(req);
  res.send(html);
});

app.get('/bundle', (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      '/Users/aaron/Desktop/turing/tuts/udemy/grider_react_serverside/server/public/bundle.js',
    ),
  );
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
