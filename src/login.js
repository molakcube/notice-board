const login = document.querySelector(".loginForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");
const resetbutton = document.querySelector("#sign_in button");

const inform = JSON.parse(localStorage.getItem("show"));
const wholeInform = JSON.parse(localStorage.getItem("article"));
const checkType = localStorage.getItem("checkidtype");

function checkId (event) {
    event.preventDefault();
    const idValue = id.value;
    const pwValue = pw.value;
    const checkLog = localStorage.getItem(idValue);
    if ( id.value !== inform[0].id) {
        alert("아이디가 일치하지 않습니다.")
    } else if(pw.value != inform[0].pw) {
        alert("비밀번호가 일치하지 않습니다.")     
    } else successLogin();
}

function successLogin() {
    if(checkType == "revise") {
        location.href="revise.html";
    } else {
        const reviseInform = wholeInform.filter((title) => title.title !== inform[0].title);
        localStorage.setItem("article", JSON.stringify(reviseInform));
        localStorage.removeItem("show");
        alert("삭제되었습니다.");
        location.href="list.html";
    }
}

login.addEventListener("submit",checkId);