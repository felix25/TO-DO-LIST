const app = require('./app');

// Start server
app.listen(app.get('port'));
console.log(app.get('port'));
