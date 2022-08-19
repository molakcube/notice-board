const inform = localStorage.getItem("show");
const content = localStorage.getItem("article");
const parsedInform = JSON.parse(inform);
const parsedContent = JSON.parse(content);
//가독성 위해 변수명 바꾸기
function showContent (informs) {
    const articleZone = document.createElement("div");
    const titleZone = document.createElement("h2");
    const idZone = document.createElement("span");
    const show = document.querySelector("#container");
    show.id = informs.title;
    //글 불러오기 매커니즘
    const delButton = document.createElement("button");
    //글 삭제 버튼
    const reviseButton = document.createElement("button");
    //글 수정 버튼 
    idZone.innerText = `작성자: ${informs.id}`;
    titleZone.innerText = informs.title;
    articleZone.innerText = informs.content;

    delButton.innerText = "삭제";
    reviseButton.innerText = "수정";

    delButton.addEventListener("click", delArticle);

    show.appendChild(titleZone);
    show.appendChild(idZone);
    show.appendChild(articleZone);
    show.appendChild(delButton);
    show.appendChild(reviseButton);

    reviseButton.addEventListener("click",reviseArticle);
    parsedInform[0].comment.forEach(loadComment);
    console.log(parsedInform[0].comment);
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

parsedInform.forEach(showContent);