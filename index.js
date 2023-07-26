// index.js
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use(express.static(__dirname + "/src"));

// app.get("사용할 도메인",(req,res)){
    // 사용할 도메인을 치면 불러오는거임 이 파일을
    // 그러면 로그인폼 , 회원가입폼 디테일폼 만들고 이거랑 똑같이 만들면 됨
    // 사용할 도메인은 메서드라서 나중에 백엔드 작업할때 저게 중복되면 안되니까
    // form 이라는 단어써서 구분지어주셈 일단 프론트에서 폼 만들고 말해주셈
    // res.sendFile(__dirname+"index.html")
// }
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
    console.log('로그인폼')
  }); 

app.get("/joinform",(req,res)=>{
    res.sendFile(__dirname +'/src/joinForm.html')
    console.log('회원가입폼')
})

app.get("/adminform",(req,res)=>{
  res.sendFile(__dirname +'/src/adminForm.html')
  console.log('회원폼')
})

app.get("/permuteform", (req,res)=>{
  res.sendFile(__dirname + '/src/permuteForm.html')
  console.log('회원정보수정폼')
})
  
  app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log("The server is listening on port 8080");
  }); 
  
  const router = require("./routes");
app.use("/", router); 