const inform = localStorage.getItem("show");
const parsedInform = JSON.parse(inform);

function showContent (informs) {
    const articleZone = document.createElement("div");
    const titleZone = document.createElement("h2");
    const idZone = document.createElement("span");
    const show = document.querySelector("#container");

    idZone.innerText = `작성자: ${informs.id}`;
    titleZone.innerText = informs.title;
    articleZone.innerText = informs.content;

    show.appendChild(titleZone);
    show.appendChild(idZone);
    show.appendChild(articleZone);
}

parsedInform.forEach(showContent);