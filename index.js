const express = require('express');
const app = express();

const countries = require('./countries/countries.json');

app.get('/countries', (req, res) => {
    res.json(countries);
});
app.get('/', (req, res) => {
  return res.json({
      note: 'Countries List',
      updates: '2024'
  })
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
