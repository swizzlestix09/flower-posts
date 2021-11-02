const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('../../public'));

app.get( (req, res) => {
  // axios.get('http://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(error => {
  //     res.send(error);
  //   });
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

