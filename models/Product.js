const pool = require("../config/database")

class Product{
    static async obtenerTodo(){
       
        const [row]= await pool.query('SELECT * FROM libros');
        return row;
       
    }
    static async create({titulo,autor,genero,anio}){

        await pool.query('INSERT INTO libros(titulo,autor,genero,anio_publicacion) VALUES(?,?,?,?)',
            [titulo,autor,genero,anio]
        );
    }
    static async getById(id){
        const [rows] = await pool.query('SELECT * FROM libros WHERE id = ?', [id]);
        return rows[0];
    }
    static async update(id,{titulo,autor,genero,anio}){
        await pool.query('UPDATE libros SET titulo=?, autor=?,genero=?,anio_publicacion=? WHERE id = ?',
            [titulo,autor,genero,anio,id]
        )
    }

    static async delete(id) {
        await pool.query('DELETE FROM libros WHERE id = ?', [id]);
      }
    
}
module.exports= Product;