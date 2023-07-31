const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const userController = require("./controller/UserController");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));

// set the view engine
// ejs를 사용할 수 있게해줌
app.set("view engine ", "ejs");
app.set("view", path.join(__dirname), "views");
// __dirname = 절대경로를 알려주는 변수
// __는 기본적으로 정의된 변수에 붙는거

// Routes
app.get("/", userController.index);
app.post("/user", userController.post_user);
//app.get("/login", userController.login);
//app.get("/join", userController.join);
//app.post("/login", userController.post_login);
//app.post("/edit", userController.edit);
//app.patch("/user", userController.patch_user);
//app.delete("/user", userController.delete_user);
app.post("/user/check_duplicate_id", userController.checkDuplicateId); // 중복검사를 하는 경로설정

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});