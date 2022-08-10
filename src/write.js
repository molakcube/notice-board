const enroll = document.querySelector("button");

function showcontent (event) {
    event.preventDefault();
    const contentBox = document.querySelector(".article");
    const id = document.querySelector(".id"); 
    const title = document.querySelector(".title");

    const  articleZone = document.createElement("div");
    const titleZone = document.createElement("h2");
    const idZone = document.createElement("span");

    titleZone.innerText = title.value;
    idZone.innerText = `작성자: ${id.value}`;
    articleZone.innerText = contentBox.value; 

    const showContent = document.querySelector(".show");

    showContent.appendChild(titleZone);
    showContent.appendChild(idZone);
    showContent.appendChild(articleZone);
}

enroll.addEventListener("click", showcontent);