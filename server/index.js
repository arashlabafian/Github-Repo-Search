const { default: Axios } = require('axios');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.all('/user', (req, res) => {
  const { username, password } = req.body;
  axios
    .get('https://api.github.com/user', {
      auth: {
        username,
        password,
      },
    })
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => res.status(401).send(JSON.stringify(err)));
});

app.listen(3005, () => {
  console.log(`Server started on 3005`);
});
