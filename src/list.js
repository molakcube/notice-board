const articles = localStorage.getItem("article");
const list = document.getElementById("list");
const parsedArticles = JSON.parse(articles);
const writeButton = document.querySelector("footer button");

function showPage(event) {
    const target = event.target.parentElement.parentElement;
    const filter = parsedArticles.filter((showP) => showP.title == target.id);
    localStorage.setItem("show", JSON.stringify(filter));
};

function show (article) {
    const articleZone = document.createElement("div");
    articleZone.id = article.title;
    const titleZone = document.createElement("h2");
    const idZone = document.createElement("span");
    const dateZone = document.createElement("span");
    const commentNo = document.createElement("span");

    const loadLink = document.createElement("a");
    loadLink.setAttribute("href","load.html");

    loadLink.innerText = article.title;
    if(article.comment.length !== 0) {
    commentNo.innerText = ` [${article.comment.length}]`;
    }
    idZone.innerText = `작성자: ${article.id}`;
    dateZone.innerText = article.date;

    titleZone.appendChild(loadLink);
    titleZone.appendChild(commentNo);
    articleZone.appendChild(titleZone);
    articleZone.appendChild(idZone);
    articleZone.appendChild(dateZone);
    list.appendChild(articleZone);

    titleZone.addEventListener("click", showPage);
}

writeButton.addEventListener("click", () => location.href="write.html");
parsedArticles.forEach(show);