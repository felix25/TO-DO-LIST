const userSignup = {};
const { pool } = require("../config");

userSignup.registerUser = (request,response) =>{
    const { firtName,lastName,fullName,email,password} = request.body.data;

    pool.query('SELECT * FROM usuario WHERE email = $1 ',[email],(error,results)=>{
        if(error){
            throw error;
        }
        if(results.rowCount > 0){
            response.json({ message: 'El correo ya se encuentra registrado' })
        }
        else{
            pool.query('INSERT INTO usuario (firt_name, last_name,full_name,email,pwd) VALUES ($1, $2, $3, $4, $5)', [firtName, lastName,fullName,email,password], (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send({message : 'usuario registrado'})
            })
        }
    })
  
}
module.exports = userSignup;