const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello from Express!');
})

app.get('/ddss', (request, response) => {
  response.json({ "you": "go to nahoy"})
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})