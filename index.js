const path = require('path');

const express = require('express');
const mustacheExpress = require('mustache-express');
const axios = require('axios');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const addCatPicClass = html => {
    return `${html.split('').slice(0, 2).join('')} class="catPic" ${html.split('').slice(3).join('')}`;
  }

  axios.get('http://thecatapi.com/api/images/get?size=small&type=png&format=html')
    .then(response => {
      const data = {
        catPic: addCatPicClass(response.data)
      }
      res.render('index', data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/*', (req, res) => {
  const data = {
    error: true
  };
  res.render('index', data);
});

app.listen(3000, () => {
  console.log('Cats forever and ever on port 3000...');
});