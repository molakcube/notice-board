const show = localStorage.getItem("show");
const articles = localStorage.getItem("article");
const parsedShow = JSON.parse(show);
const parsedArticles = JSON.parse(articles);

const id = document.getElementById("id");
const date = document.getElementById("date");
const title = document.getElementById("title");
const content = document.getElementById("content");
const reviseButton = document.getElementById("revise-button");
const deleteButton = document.getElementById("delete-button");

function paint (article) {
   
    id.innerText = article.id;
    date.innerText = article.date;
    title.innerText = article.title;
    content.innerText = article.content;
    

    deleteButton.addEventListener("click", delArticle);
    reviseButton.addEventListener("click",reviseArticle);
    parsedShow[0].comment.forEach(loadComment);
}

function loadComment(comments) {
    const commentList = document.getElementById("comments");
    const commentBox = document.createElement("div");
    commentBox.className = "comment-box";
    commentBox.innerText = comments;

    commentList.appendChild(commentBox);
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