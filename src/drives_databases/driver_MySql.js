const mysql= require ('mysql');
const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'proyecto_administrador'
});
connection.connect((err) => {
    if (err) throw err; 
    console.log('fue exitoso mi trabajo')
});

module.exports=mysql