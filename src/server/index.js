const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('../../public'));

app.get('/posts', (req, res) => {
  // axios.get('http://jsonplaceholder.typicode.com/posts')
  //   .then(data => {
  //     console.log(data.data)
  //     res.send(data.data);
  //   })
  //   .catch(error => {
  //     res.send(error);
  //   });
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

