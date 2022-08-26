const commentFrom = document.getElementById("comment-form");
const commentArea = document.getElementById("comment");
const listArea = document.getElementById("comment_list");

const inForm = JSON.parse(localStorage.getItem("article"));
const showInform = JSON.parse(localStorage.getItem("show"));


function submmitComment() {
    const commentBox = document.createElement("div");
    commentBox.className = "comment-box";
    
    commentBox.innerText = commentArea.value;

    inForm.map((change) => {
        if (change.title == showInform[0].title) {
            change.comment.push(commentArea.value);
            showInform[0].comment.push(commentArea.value);
            localStorage.setItem("article", JSON.stringify(inForm));
            localStorage.setItem("show", JSON.stringify(showInform));
        }
    })
    listArea.appendChild(commentBox);
}

commentFrom.addEventListener("submit", submmitComment);