const commentFrom = document.getElementById("comment");
const commentArea = document.getElementById("comment_zone");
const listArea = document.getElementById("comment_list");

const inForm = JSON.parse(localStorage.getItem("article"));
const showInform = JSON.parse(localStorage.getItem("show"));


function submmitComment(event) {
    event.preventDefault();
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = commentArea.value;

    inForm.map((change) => {
        if (change.title == showInform[0].title) {
            change.comment.push(commentArea.value);
            showInform[0].comment.push(commentArea.value);
            localStorage.setItem("article", JSON.stringify(inForm));
            localStorage.setItem("show", JSON.stringify(showInform));
            console.log(inForm);
        }
    })
    li.appendChild(span);
    listArea.appendChild(li);
}

commentFrom.addEventListener("submit", submmitComment);