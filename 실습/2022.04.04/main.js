// 맨위에 하나만 가져옴
// const content = document.querySelector('.content');

// content.style.border = '3px solid blue';

// content.style.top = '100px';
// content.style.left = '100px';
// content.style.width = '500px';
// content.style.height = '300px';
// content.style.backgroundColor = 'white';
// content.style.fontSize = '2rem';

// // 무조건 글자로 받아들임
// // content.textContent += "글자가 적혀요";

// // html 자체로 받아들임
// content.innerHTML = "<h1 class = 'test'>javaScript 쉽죠<h1>"
// content.innerHTML += "<br><p class = 'textContent'>javaScript 쉽죠</p>";





// 오류남
// const up = document.querySelector('body');
// const content = document.querySelector('.wrap');

// content.style.border = '3px solid red';
// content.style.position = 'relative';
// content.style.display = 'flex';
// content.style.width = '500px';
// content.style.height = '300px';

// // up.innerHTML = "<h1>이거 만들어 보세요<h1>" + up.innerHTML;
// content.innerHTML = "<div class = 'text'>만들어 볼까요?<div>";
// content.style.fontSize = '2rem';
// content.style.fontWeight = 900;
// content.style.padding = 10px;

const content = document.querySelector('.content');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () =>{
  content.textContent += "클릭 하셨어요";
});

window.addEventListener('keydown', (e)=>{
  console.log(e);
  content.textContent += `${e.key}을 누르셨습니다`
});


const alertBtn = document.querySelector('.alertBtn');
const confirmBtn = document.querySelector('.confirmBtn');

alertBtn.addEventListener('click', ()=>{
  window.alert("위험 위험");
})
confirmBtn.addEventListener('click', ()=>{
  let response = window.confirm("확인 or 취소");
  if(response){
    alert("확인을 누르셨습니다.");
  } else {
    alert("취소를 누르셨습니다.")
  }
})


