const form = document.getElementById("write");

informaton = [];

function save (e) {
    e.preventDefault();
    const content = document.getElementById("content");
    const id = document.getElementById("id"); 
    const title = document.getElementById("title");
    const pw = document.getElementById("pw");

    const userId = id.value;
    const userPw = pw.value;
    const userTitle = title.value;
    const userContent = content.value;

    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);

    informObj = {
        id: userId,
        pw: userPw,
        title: userTitle,
        content: userContent,
        date: `${year}-${month}-${day}`, 
        comment:[],
        //이후 조회수 기능 추가
    }
    
    informaton.push(informObj);
    saveInform();
    alert("등록되었습니다");
    location.href="list.html"
}

function saveInform() {
    localStorage.setItem("article", JSON.stringify(informaton));
}

form.addEventListener("submit", save);

if(JSON.parse(localStorage.getItem("article")) !== null) {
    informaton = (JSON.parse(localStorage.getItem("article")));
    saveInform();
}