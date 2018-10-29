const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;
const controllers = require('./controllers/controllers.js');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json())

app.listen(port, () => {console.log(`Savanna's lisitening on port" ${port}!`)});

app.get('/api/pets', controllers.getPets)
app.post('/api/pets', controllers.savePet)
app.delete('/api/pets/:id', controllers.deletePet)
app.get('/api/getSavedPets', controllers.getSavedPets)
