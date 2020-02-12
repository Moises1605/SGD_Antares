const mySql = require("mysql");
//Conexão com o banco de dados não alterar
const conection = mySql.createConnection({
    host: "sql130.main-hosting.eu",
    port: "3306",
    user: 'u970457530_sgda_root',
    password: '123456789',
    database: "u970457530_sgda"
});

mySql.createConnection({multipleStatements: true});

conection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = conection;