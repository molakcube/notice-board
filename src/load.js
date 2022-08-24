const show = localStorage.getItem("show");
const articles = localStorage.getItem("article");
const parsedShow = JSON.parse(show);
const parsedArticles = JSON.parse(articles);

function paint (article) {
    const show = document.querySelector("main");
    const articleBox = document.createElement("div");
    articleBox.className = "article-box";
    articleBox.id = article.title;
    const informBox = document.createElement("div");
    informBox.className = "inform-box";
    const title = document.createElement("div");
    title.className = "title";
    const post = document.createElement("div");
    post.className = "post";

    const delButton = document.createElement("button");
    delButton.type = "button";
    delButton.className = "del-button";
    const reviseButton = document.createElement("button");
    reviseButton.type = "button";
    reviseButton.className = "revise-button";
   
    titleZone.innerText = article.title;
    idZone.innerText = `작성자: ${article.id}`;
    articleZone.innerText = article.content;

    reviseButton.innerText = "Revise";
    delButton.innerText = "Delete";

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