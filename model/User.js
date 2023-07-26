/* ./model/User.js */
const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user_name',
    password: 'password',
    database: 'database_name'
});

// 회원가입 정보 입력
exports.insert = (data, cb) => {
    var sql = `INSERT INTO user VALUES ('${data.id}','${data.name}','${data.email}','${data.phoneNumber}','${data.password}','${data.birthday}','${data.gender}','${data.address}','${data.passwordcheck}');`;

    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        cb(data.id);
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
    var sql = `UPDATE user SET name = '${data.name}', email = '${data.email}' phoneNumber = '${data.phoneNumber}', password = '${data.password}', WHERE id = '${data.id}', passwordcheck = '${data.passwordcheck}', birthday = '${data.birthday}', gender = '${data.gender}', address = '${data.address}';`;

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