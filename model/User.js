/* ./model/User.js */
const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'choikc0901!',
    database: 'signup',
    port: 3306,
    
});

// 아이디 중복확인
exports.checkDuplicateId = (id, cb) => {
    let sql = `SELECT id From user WHERE id = '${id}' LIMIT 1;`;

    cnn.query(sql, function (err, rows){
        if(err) {
            console.error("Erroor executing MySQL query", err);
            return cb(err);
        }
        cb(null, rows.length > 0);
    });
};

// 회원가입 정보 입력
exports.insert = (data, cb) => {
    exports.checkDuplicateId(data.id, function (err, isDuplicate) {
        if(err){
            cb(err);
        }else if (isDuplicate){
            cb("Duplicate ID");
        }else{
            var sql = `INSERT INTO user VALUES ('${data.id}','${data.name}','${data.email}','${data.phoneNumber}','${data.password}');`;

            cnn.query(sql, (err, rows) => {
            if(err) {
                console.error("Error executing MySQL query", err);
                return cb(err);
            }
            cb(null,{id: data.id});
            });
        }
    });
}

// 로그인 정보 읽기
exports.select = (id, password, cb) => {
    var sql = `SELECT * FROM user WHERE id = '${id}'limit 1`;
    
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows[0]);
    });
}

// 회원 정보
exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM user WHERE id = '${id}' limit 1;`;

    cnn.query(sql, function(err, rows){
        if(err) throw err;
        cb(rows);
    });
}

// 회원정보 수정
exports.update = (data, cb) => {
    var sql = `UPDATE user SET name = '${data.name}', email = '${data.email}' phoneNumber = '${data.phoneNumber}', password = '${data.password}', WHERE id = '${data.id}';`;

    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        cb(rows);
    });
}

// 회원탈퇴
exports.delete = (id, cb) => {
    var sql = `DELETE FROM user WHERE id = '${id}';`;

    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        cb(rows);
    });
}