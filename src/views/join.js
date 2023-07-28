function joinform_check() {
    var id = document.getElementById("id");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");
    //var birthday = document.getElementById("birthday");
    //var gender = document.getElementById("gender");
    //var address = document.getElementById("address");
    var passwordcheck = document.getElementById("passwordcheck");
    var female = document.getElementById("female");
    var male = document.getElementById("male");
    
    if(id.value === ""){ //해당 입력값이 없을 경우 같은말 : if(!id.value)
        alert("아이디를 입력하세요.");
        id.focus(); // 커서 깜빡임 제거
        return false;
    };

    if(password === ""){
        alert("비밀번호를 입력하세요.");
        password.focus();
        return false;
    };

    // 비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
    var passwordcheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!passwordcheck.test(password.value)){
        alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
        password.focus();
        return false;
    };

    if (passwordcheck.value !== password.value){
        alert("비밀번호가 일치하지 않습니다.");
        passwordcheck.focus();
        return false;
    };

    if (name.value === ""){
        alert("이름을 입력해주세요.");
        name.focus();
        return false;
    };

    if (!female.checked && !male.checked) { //둘 다 미체크시
        alert("성별을 선택해주세요.")
        female.focus();
        male.focus();
        return false;
    };

    var reg = /^[0-9]+/g; //숫자만 입력하는 정규식

    if (!reg.test(phoneNumber.value)) {
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        phoneNumber.focus();
        return false;
    };

    if (email.value === "") {
        alert("이메일 주소를 입력해주세요.");
        email.focus();
        return false;
    };

    if (!agree.checked) { //개인정보이용동의
        alert("약관의 동의해주세요.");
        agree.focus();
        return false;
    };

    // 입력값 전송
    document.join_form.submit(); //유효성검사의 포인트
}

//아이디 중복체크 팝업창 (공백이니 수정해야함)
function id_check() {
    //window.open("팝업될 문서경로"."팝업될 문서 이름"."옵션");
    window.open("","","width=600, height=200, left=200, top=100");
}

// 이메일 옵션 선택후 주소(naver.com...) 자동 완성
function change_email() {
    var email_add = document.getElementById("email_add");
    var email_sel = document.getElementById("email_sel");

    // 지금 골라진 옵션의 순서와 값 구하기
    var idx = email_sel.options.selectedIndex;
    var val = email_sel.options[idx].value;

    email_add.value = val;
}

// 우편번호 검색 팝업창 (현제 공백문서이니 수정해야함)
function search_address() {
    window.open("","b","width=600, height=300, left=200, top=100");
}