const article = JSON.parse(localStorage.getItem("article"));
const show = JSON.parse(localStorage.getItem("show"));
const targetArticle = show[0];

const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const title = document.querySelector(".title");
const content = document.querySelector(".content");

const button = document.querySelector("button");

id.value = targetArticle.id;
pw.value = targetArticle.pw;
title.value = targetArticle.title;
content.value = targetArticle.content;

function revise(event) {
    event.preventDefault();
    if(confirm("수정하시겠습니까?")) {
        targetArticle.title = title.value;
        targetArticle.content = content.value;
        
        article.map((change) => {
            if (change.id == targetArticle.id) {
                change.title = targetArticle.title;
                change.content = targetArticle.content;
                change.date = `수정시간: ${Date().toLocaleString()}`;
            }
        })
        localStorage.setItem("article", JSON.stringify(article));
        alert("수정되었습니다."); 
        location.href="list.html";
    }
}

button.addEventListener("click", revise);
