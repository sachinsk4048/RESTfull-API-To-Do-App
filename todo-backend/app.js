const express = require('express')

const path = require('path')
const rootdir=require("./util/pathutil")
const app = express(); 
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');





const errorsController = require('./controller/error')
const { default: mongoose } = require('mongoose');
const todoItemRouter = require('./routes/todoItemRouter');

const db_path = "mongodb+srv://root:root@sachin.08ycelm.mongodb.net/TODO?retryWrites=true&w=majority&appName=sachin" ;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())
app.use(express.urlencoded());
app.use(cors());

app.use('/api/todo',todoItemRouter);
app.get(errorsController.pageNotFound);



const PORT = 3000;

mongoose.connect(db_path).then (()=>{
  console.log("connecting to mongo");
  app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
  });
}).catch(err =>{
  console.log('error while connecting to db',err);
});

