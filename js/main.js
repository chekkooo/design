//모든 article 요소들을 변수에 저장
const item = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("aside span");





//aside 안에 있는 CLOSE버튼을 클릭하면
close.addEventListener("click",e => {
    aside.classList.remove("on");   //aside요소에 클라스 on을 붙여준다(팝업패널이 보이게)
    aside.querySelector("video").pause();   //aside 요소 내부의 동영상을 중지
})