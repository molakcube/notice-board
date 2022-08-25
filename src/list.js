const articles = localStorage.getItem("article");
const list = document.getElementById("article-list");
const parsedArticles = JSON.parse(articles);
const writeButton = document.querySelector("#container button");

function showPage(event) {
    const target = event.target.parentElement.parentElement.parentElement;
    const filter = parsedArticles.filter((showP) => showP.id == target.id);
    localStorage.setItem("show", JSON.stringify(filter));
};

function show (article) {
    const articleBox = document.createElement("div");
    articleBox.className = "article-box"
    articleBox.id = article.id;  
    const informBox = document.createElement("div");
    informBox.className = "inform-box"  
    const titleBox = document.createElement("div");  
    titleBox.className = "title-box"  
    const extraBox = document.createElement("div");
    extraBox.className = "extra-box"  

    const id = document.createElement("div");
    id.className = "id";
    const date = document.createElement("div");
    date.className = "date";
    const title = document.createElement("div");
    title.className = "title";
    const tags = document.createElement("div");
    tags.className = "tags";
    const commentNo = document.createElement("div");
    commentNo.className = "commentNo";

    const loadLink = document.createElement("a");
    loadLink.setAttribute("href","load.html");

    loadLink.innerText = article.title;
    if(article.comment.length !== 0) {
    commentNo.innerText = ` [${article.comment.length}]`;
    }
    id.innerText = `${article.id} `;
    date.innerText = `${article.date}`;

    informBox.appendChild(id);
    informBox.appendChild(date);
    title.appendChild(loadLink);
    titleBox.appendChild(title);
    extraBox.appendChild(tags);
    extraBox.appendChild(commentNo);

    articleBox.appendChild(informBox);
    articleBox.appendChild(titleBox);
    articleBox.appendChild(extraBox);

    list.appendChild(articleBox);

    loadLink.addEventListener("click", showPage);
}

if(articles == null) {
    const articleBox = document.createElement("div");
    articleBox.className = "none";
    articleBox.innerText = "Not exist any post";
    list.appendChild(articleBox);
}

writeButton.addEventListener("click", () => location.href="write.html");
parsedArticles.forEach(show);

