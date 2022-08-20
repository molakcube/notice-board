const login = document.querySelector(".loginForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");
const resetbutton = document.querySelector("#sign_in button");

const show = JSON.parse(localStorage.getItem("show"));
const articles = JSON.parse(localStorage.getItem("article"));
const checkType = localStorage.getItem("checkidtype");

function checkId (event) {
    event.preventDefault();
    const idValue = id.value;
    const pwValue = pw.value;
    if ( idValue !== inform[0].id) {
        alert("아이디가 일치하지 않습니다.")
    } else if(pwValue != inform[0].pw) {
        alert("비밀번호가 일치하지 않습니다.")     
    } else successLogin();
}

function successLogin() {
    if(checkType == "revise") {
        location.href="revise.html";
    } else {
        const reviseArticle = articles.filter((title) => title.title !== show[0].title);
        localStorage.setItem("article", JSON.stringify(reviseArticle));
        localStorage.removeItem("show");
        alert("삭제되었습니다.");
        location.href="list.html";
    }
}

login.addEventListener("submit",checkId);