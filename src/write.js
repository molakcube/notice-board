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

    informObj = {
        id: userId,
        pw: userPw,
        title: userTitle,
        content: userContent,
        date: Date().toLocaleString(), //이후에 다른 방식으로 날짜 삽입
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