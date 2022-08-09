const enroll = document.querySelector("button");

function showcontent (event) {
    event.preventDefault();
    const contentBox = document.querySelector(".article");
    const content = contentBox.value;
    const showContent = document.querySelector(".show_content");
    showContent.innerText = content;
}

enroll.addEventListener("click", showcontent);