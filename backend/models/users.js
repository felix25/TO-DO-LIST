const user = {};
const { pool } = require('../config');

user.getUsers = (request, response) => {
    pool.query('SELECT * FROM usuario ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
    })
}

user.validateUSer =(request,response)=>{
    const {email,pw} = request.body;
    pool.query('SELECT * FROM usuario WHERE email = $1 and pwd = $2',[email,pw],(error,results)=>{
        if(error){
            throw error;
        }
        if(results.rowCount == 0){response.json({ response: 'datos son incorrectos' })}
        else{
            response.status(200).json(results.rows);
        }
    })
}
module.exports = user;