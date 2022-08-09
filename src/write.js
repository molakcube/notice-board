const enroll = document.querySelector("button");

function showcontent (event) {
    event.preventDefault();
    const contentBox = document.querySelector(".article");
    const content = contentBox.value;
    const showContent = document.querySelector(".show_content");
    showContent.innerText = content;
    show ();
}

function show () {
    const main = document.querySelector(".container");
    const show = document.querySelector(".show");
    main.classList.toggle("hidden");
    show.classList.toggle("hidden");
}
enroll.addEventListener("click", showcontent);