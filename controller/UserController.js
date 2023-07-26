const User = require("../model/User");

// 메인화면 = 로그인화면
exports.index = (req, res) => {
    res.render("login");
}

// user 정보 저장하기
exports.post_user = (req, res) => {
    User.insert(req.body, function (result){
        res.send({id: result});
    });
}

// 회원가입 화면
exports.join = (req, res) => {
    res.render("join");
}

// 로그인 시도
exports.post_login = (req, res) => {
    User.select(req.body.id, req.body.password, function(result){
        if(result === null) {
            alert("아이디, 비밀번호를 확인해주세요.");
            return res.send({result: result, flag: false});
        }else{
            if(req.body.password !== result.password){
                alert("비밀번호를 확인해주세요.");
                return res.send({result: result, flag: false});
            }else{
                if(req.body.id !== result.id){
                    alert("아이디를 확인해주세요.");
                    return res.send({result: result, flag: false});
                }
                alert("환영합니다.");
                return res.send({result: result, flag: true});
            }
        }
    });
}

// 회원정보 수정 화면
exports.edit = (req, res) => {
    User.get_user(req.body.id, function(result){
        res.render("edit", {data: result[0]});
    });
}

// 정보 수정
exports.patch_user = (req, res) => {
    User.update(req.body, function(result){
        console.log("update result:", result);
        alert("수정되었습니다.");
        res.send("수정완료");
    });
}

// 정보 삭제
exports.delete_user = (req, res) => {
    User.delete(req.body.id, function(result){
        console.log("delete result:", result);
        alert("회원탈퇴 되었습니다.")
        res.send("success Delete!");
    });
}