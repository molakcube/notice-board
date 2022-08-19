구현 기능

1. ID, PW, 제목, 내용, 등록버튼
2. 글을 쓰면 쓴 내용이 화면에 표시
3. id, pw ,제목, 내용을 객체로 저장하여 배열에 등록 후 localstorage에 저장
4. 글쓰기 게시판에서 저장한 글들을 목록화 시켜 글목록 페이지에 표시
5. 글 목록 페이지에서 해당 글 클릭 시 해당 글의 내용을 볼 수 있게 글 로딩 페이지로 이동하여 표시
6. 삭제 버튼 추가 생성
7. 삭제 버튼을 누르면 알림창 표시
8. 알림창에서 확인 버튼을 누르면 aritcle배열에서 보여지고 있는 글과 동일한 title을 가진 article만 선별
9. 선별한 article을 다시 article에 입력 후 show 배열(보여지는 글 객체만 담고 있는 배열) 삭제 후 list page로 연결
10. 수정 버튼 추가
11. 수정 버튼 누를 시 수정 창으로 이동
12. 수정 창에서 눌렀던 글 수정 시 배열에 같은 id 가진 오브젝트의 내용을 작성 내용으로 수정
13. write 페이지에서 글 작성시 기존에 있던 정보들이 사라지던 문제 수정
14. 로그인 페이지 및 로그인 버튼 추가
15. 글 삭제/수정 시 type에 삭제 수정이 뭔지 localstorage에 저장하여 로그인 성공시 연결시킬 페이지 및 기능 연결 << 차후에 스크립트 기능을 보다 세분화 시켜 삭제 기능만 구현하는 파일로 나누어도 될지 고민
16. 댓글기능 추가
17. 정보를 저장할 때 댓글과 댓글 갯수를 array로 저장
18. 글 목록에서 댓글 갯수 표현, 댓글이 0개일 경우 표현 안함
19. 댓글 등록 시 댓글을 array안으로 push

다음에 구현해볼 기능

1. css 구현 시작
2. 코드 정리

발견된 버그

1. 삭제하지 않겠다고 함에도 불구하고 삭제가 진행되는 부분//해결
2. 댓글을 작성하고 불러올 때 배열로 불러오는 방법을 고민해봐야 함

최종 구현해볼 기능

1. 버튼을 누르면 ID, PW, 제목, 내용,글쓴 시간, 수정 시간을 객체형태로 localstorage에 저장
2. localstorage에 저장된 객체를 불러와 글목록에 뿌리기
3. 등록버튼을 누르면 ID, 제목, 내용 보이게 하기
4. 동작버튼을 통해 해당 부분을 볼드처리하거나 밑줄을 긋거나 색깔을 바꾸는 등의 word 기능 구현
