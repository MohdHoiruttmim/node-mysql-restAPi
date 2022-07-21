const express = require('express');
const cors = require('cors');
// const { connect } = require('./config/config.js')
const router = require('./routes/route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send("assalamu'alaykum");
});

// const checkConnection = async () => {
//   try {
//     await connect.autenticate();
//     console.log('connected');
//   } catch (err) {
//     console.log(err);
//   }
// };

// checkConnection();

app.listen(8080, () => {
  console.log('server hosted in http://localhost:8080');
});
