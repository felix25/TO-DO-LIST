const tareas = {};
const { pool } = require("../config");

/**
 * LISTAR TAREAS
 */
tareas.getTareas = (request, response) => {
  pool.query("SELECT * FROM tareas ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

/**
 * LISTA TAREA POR ID
 */
tareas.getTareaById =(request, response) =>{
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM tareas WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
/**
 * ACTUALIZAR TAREA
 */
tareas.updateTareas = (request, response) => {
 
  const id = parseInt(request.params.id);
  const { descripcion, status,fecha } = request.body;
  pool.query(
    "UPDATE tareas SET descripcion = $1, status = $2,fecha=$3 WHERE id = $4",
    [descripcion, status, fecha,id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};
/**
 * REGISTRAR TAREA
 */
tareas.register = (request,response) =>{
    const { descripcion, status,fecha } = request.body
  
    pool.query('INSERT INTO tareas (descripcion, status,fecha) VALUES ($1, $2,$3)', [descripcion, status,fecha], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}
module.exports = tareas;
