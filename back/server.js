require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const homeRouter = require('./routes/home');
const productRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const cartsRouter = require('./routes/shoppingCart');
const usersRouter = require('./routes/users');

var app = express();
//middleware/config server

app.use(express.json());
app.use(cors());
 
app.use("/products", productRouter);
app.use("/categories", categoriesRouter);
app.use("/shoppingCart", cartsRouter);
app.use("/users", usersRouter);
app.use("/", homeRouter);

//connexion
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology:true, useNewUrlParser:true})
let db = mongoose.connection
db.on('error', (err => {throw err}))
db.once('open', (err => {console.log('database connected')}))

app.listen(process.env.PORT, () =>
    console.log('server is running on port ' + process.env.PORT)
);