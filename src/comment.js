const button = document.getElementById("comment_button");
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
            change.comment = commentArea.value;
            change.commentNo = change.commentNo + 1;
            console.log(change);
        }
    })
    localStorage.setItem("article", JSON.stringify(inForm));
    li.appendChild(span);
    listArea.appendChild(li);
}

button.addEventListener("click", submmitComment);