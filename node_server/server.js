const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const https = require('https');

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Sikeres API hívás!' });
});

app.post('/api', (req, res) => {
  const name = req.body.name;
  const mail = req.body.mail;
  console.log(name +' '+mail);
  res.json({ message: 'Sikeres API hívás!' });

  const data = {
    profil: {
      status: 'subscribe',
      name: name,
      mail: mail,
    }
  };

  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  const url = 'https://react-http-70f07-default-rtdb.firebaseio.com/Wizgrid.json'
  const options = { method: 'POST' };
  const request = https.request(url, options, (res) => { console.log('Send it') });
  request.write(jsonData);
  request.end();
})

app.get('/subscribers', (req, res) => {
  const url = 'https://react-http-70f07-default-rtdb.firebaseio.com/Wizgrid.json'
  https.get(url, response=>{
    let rawData=[];
    response.on('data', (chunk)=>{
      rawData += chunk;
      res.send(rawData);
    })
    
  })

})

app.listen(port, () => {
  console.log(`The server run in : http://localhost:${port}`);
})