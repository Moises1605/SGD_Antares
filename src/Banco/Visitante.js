const conection = require("./conection.js")

exports.add = function add(idPessoa, callback){
    var sql = "INSERT INTO visitantes (idPessoa) VALUES = ?"
    conection.query(sql, idPessoa, function(err, result){
        if (err) throw err;
        callback(result);
    });
}

exports.getByIdPessoa = function getByIdPessoa(idPessoa, callback){
    var sql = "SELECT FROM visitantes WHERE idPessoa = ?"
    conection.query(sql, idPessoa, function(err, result){
        if (err) throw err;
        callback(result);
    });
}

exports.getByIdVisitante = function getByIdVisitante(idVisitante, callback){
    var sql = "SELECT FROM visitantes WHERE idVistante = ?"
    conection.query(sql, idVisitante, function(err, result){
        if (err) throw err;
        callback(result);
    });
}

exports.setIdPessoa = function setIdPessoa(idPessoa, idVisitante, callback){
    var sql = "UPDATE visitantes SET idPessoa = ? WHERE idVisitante = ?"
    var values = [idPessoa, idVisitante]
    conection.query(sql, values, function(err, result){
        if (err) throw err;
        callback(result);
    })
}

exports.remove = function remove(idVisitante, callback){
    var sql = "DELETE FROM visitantes WHERE idVisitante = ?"
    conection.query(sql, idVisitante, function(err, result){
        if (err) throw err;
        callback(result);
    })
}