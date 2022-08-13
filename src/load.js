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
}

function delArticle() {
    if (confirm("정말 글을 삭제하시겠습니까?")) {
        const container = document.querySelector("body div"); 
        const reviseInform = parsedContent.filter((title) => title.title !== container.id);
        console.log(reviseInform);
        localStorage.setItem("article", JSON.stringify(reviseInform));
        localStorage.removeItem("show");
        location.href="list.html";
    }
}

function reviseArticle() {
    if(confirm("글을 수정하시겠습니까?")){
        location.href="revise.html";
    }
}

parsedInform.forEach(showContent);