const enroll = document.querySelector("button");

informaton = [];

function savecontent (event) {
    event.preventDefault();
    const contentBox = document.querySelector(".article");
    const id = document.querySelector(".id"); 
    const title = document.querySelector(".title");
    const pw = document.querySelector(".pw");

    const userId = id.value;
    const userPw = pw.value;
    const userTitle = title.value;
    const userContent = contentBox.value;

    informObj = {
        id: userId,
        pw: userPw,
        title: userTitle,
        content: userContent,
        date: Date().toLocaleString(),
        comment:"",
        commentNo:0
    }
    
    informaton.push(informObj);
    saveInform();
    alert("등록되었습니다");
}

function saveInform() {
    localStorage.setItem("article", JSON.stringify(informaton));
}

enroll.addEventListener("click", savecontent);

if(JSON.parse(localStorage.getItem("article")) !== null) {
    informaton = (JSON.parse(localStorage.getItem("article")));
    saveInform();
}