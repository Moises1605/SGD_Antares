const conection = require("./conection.js")
const Pessoa = require("./Pessoa.js");


exports.add = function add(Login, Senha, idPessoa){
    var sql = "INSERT INTO usuarios (Login, Senha, idPessoa) VALUES ?";
    var values = [[Login, Senha, idPessoa]];
    conection.query(sql, values, function(err, result){
        if (err) throw err;
        console.log(result)
    })
}

exports.getById = function getById(idPessoa, callback){
    var sql = "SELECT * FROM usuarios WHERE idPessoa = ?"
    conection.query(sql, idPessoa, function(err, result){
        if (err) throw err;
        callback(result)
    });
}

exports.getByLogin = function getByLogin(Login, callback){
    var sql = "SELECT * FROM usuarios WHERE Login = ?"
    conection.query(sql, Login, function(err, result){
        if(err) throw err;
        callback(result);
    })
}

exports.setLogin = function setLogin(idPessoa, Login, callback){
    var sql =  "UPDATE usuarios SET Login = ? WHERE idPessoa = ?"
    var values = [Login, idPessoa];
    conection.query(sql, values, function(err, result){
        if (err) throw err;
        callback(result);
    })
}

exports.setSenha = function setSenha(idPessoa, Senha, callback){
    var sql = "UPDATE usuarios SET Senha = ? WHERE idPessoa = ?"
    var values = [Senha, idPessoa];
    conection.query(sql, values, function(err, result){
        if (err) throw err;
        callback(result);
    })
}

exports.remove = function remove(idPessoa, callback){
    var sql = "DELETE from usuarios WHERE idPessoa = ?"
    conection.query(sql, idPessoa, function(err, result){
        if (err) throw err;
        callback(result);
    });
}