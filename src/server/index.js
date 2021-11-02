const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('../../public'));

app.get('/', (req, res) => {
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

