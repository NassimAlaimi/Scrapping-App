const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const logo = $('head link[rel="icon"]').attr('href') || $('head link[rel="shortcut icon"]').attr('href');
    const title = $('head title').text();
    const description = $('meta[name="description"]').attr('content');
    res.json({ logo, title, description, link });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});