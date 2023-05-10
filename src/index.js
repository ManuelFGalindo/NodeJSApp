const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const Item = require('../src/models/Item');

app.get('/', (req, res) => {
  console.log("hit home route");
  
  Item.find()
    .then(items => res.render('../src/views/index', { items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

app.post('/item/add', (req, res) => {
  
  const newItem = new Item({
    
    name: req.body.name,
    post: req.body.post
  });

  newItem.save().then(item => res.redirect('/'));
});

const port = 3000

/**** ESTA LINEA SE COMENTA PARA VER EL SERVIDOR EN EJECUCION Y SE DESCOMENTA PARA PRUEBAS *****/

module.exports = app; // Exporta la instancia de la aplicación Express

/******* 

ESTA LINEA SE COMENTA PARA PRUEBAS
PERO SE DESCOMENTA PARA VER LA APLICACION EN EJECUCION 

app.listen(port, () => console.log('I will not run', port));

******/ 

