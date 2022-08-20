const show = localStorage.getItem("show");
const articles = localStorage.getItem("article");
const parsedShow = JSON.parse(show);
const parsedArticles = JSON.parse(articles);

function paint (article) {
    const articleZone = document.createElement("div");
    const titleZone = document.createElement("h2");
    const idZone = document.createElement("span");
    const show = document.querySelector(".container");
    show.id = article.title;

    const delButton = document.createElement("button");
    delButton.type = "button";
    const reviseButton = document.createElement("button");
    reviseButton.type = "button";
   
    titleZone.innerText = article.title;
    idZone.innerText = `작성자: ${article.id}`;
    articleZone.innerText = article.content;

    reviseButton.innerText = "수정";
    delButton.innerText = "삭제";

    show.appendChild(titleZone);
    show.appendChild(idZone);
    show.appendChild(articleZone);
    show.appendChild(delButton);
    show.appendChild(reviseButton);

    delButton.addEventListener("click", delArticle);
    reviseButton.addEventListener("click",reviseArticle);
    parsedShow[0].comment.forEach(loadComment);
}

function loadComment(comments) {
    const commentList = document.getElementById("comment_list");
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.innerText = comments;

    li.appendChild(span);
    commentList.appendChild(li);
}

function delArticle() {
    if (confirm("정말 글을 삭제하시겠습니까?")) {
        localStorage.setItem("checkidtype","delete");
        location.href="login.html";
    }
}

function reviseArticle() {
    if(confirm("글을 수정하시겠습니까?")){
        localStorage.setItem("checkidtype","revise");
        location.href="login.html";
    }
}

parsedShow.forEach(paint); // map으로 가능한지 체크