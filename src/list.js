const inform = localStorage.getItem("article");
const list = document.getElementById("list");
const parsedInform = JSON.parse(inform);
const writeButton = document.querySelector("footer button");

function showPage(event) {
    const target = event.target.parentElement.parentElement;
    const show = parsedInform.filter((showP) => showP.title == target.id);
    localStorage.setItem("show", JSON.stringify(show));
};

function showContent (informs) {
    const articleBox = document.createElement("div");
    articleBox.id = informs.title;
    const titleZone = document.createElement("h2");
    const idZone = document.createElement("span");
    const dateZone = document.createElement("span");

    const loadLink = document.createElement("a");
    loadLink.setAttribute("href","noticeboard.html");

    idZone.innerText = `작성자: ${informs.id}`;
    titleZone.innerText = informs.title;
    dateZone.innerText = informs.date;


    loadLink.appendChild(titleZone);
    articleBox.appendChild(loadLink);

    articleBox.appendChild(idZone);
    articleBox.appendChild(dateZone);
    list.appendChild(articleBox);

    loadLink.addEventListener("click", showPage);
}

writeButton.addEventListener("click", () => location.href="write.html");
parsedInform.forEach(showContent);