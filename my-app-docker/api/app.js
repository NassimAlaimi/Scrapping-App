const express = require('express');
const cors = require('cors');
const port = 4000;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));