const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express();

//settings
app.set('port',process.env.PORT || 3004, () => {
    console.log(`Server listening`)
});

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//routes
app.get('/', (request, response) => {
    response.json({ response: 'API TO-DO LIST' })
})
  
//app.get('/user', db.getUsers)
app.use('/api/user',require('./routes/users'))
app.use('/api/tareas',require('./routes/tareas'))
app.use('/api/signup',require('./routes/signup'))
//app.post('/api/login',require('./routes/users'))
//app.post('/login', db.loginUsers)

module.exports = app;