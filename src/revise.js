const article = JSON.parse(localStorage.getItem("article"));
const show = JSON.parse(localStorage.getItem("show"));
const targetArticle = show[0];

const id = document.getElementById("id");
const pw = document.getElementById("pw");
const title = document.getElementById("title");
const content = document.getElementById("content");

const form = document.getElementById("revise_form");

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
                const today = new Date();
                const year = today.getFullYear();
                const month = ("0" + (today.getMonth() + 1)).slice(-2);
                const day = ("0" + today.getDate()).slice(-2);

                change.title = targetArticle.title;
                change.content = targetArticle.content;
                change.date = `수정시간: ${year}-${month}-${day}`;
            }
        })
        localStorage.setItem("article", JSON.stringify(article));
        alert("수정되었습니다."); 
        location.href="list.html";
    }
}

form.addEventListener("submit", revise);