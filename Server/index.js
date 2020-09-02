const express = require('express');
const cors = require('cors');
const app = express();
const todos_router = require('../Server/todoRoute');

app.use(cors());
app.use(express.json());

app.use('/todos', todos_router);

app.listen('3000', function(){
    console.log('server is listening on port 3000');
});