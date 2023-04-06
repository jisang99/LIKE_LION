window.addEventListener('dblclick', ()=>{
  alert("멈춰");
})


const content = document.querySelector('.content');

content.addEventListener('click', ()=>{
  if(confirm("위험해요!!! 그래도 누르시겠어요?")){
      alert("펑!!!");
  }
})

const emergencyBtn = document.querySelector('.emergencyBtn');
emergencyBtn.addEventListener('click', (e)=>{
  alert("버ㅡ블 버ㅡ블");
  e.stopImmediatePropagation();
});

/* ----------- STEP2 -----------*/
let lightActive = document.querySelector('.lightActive').dataset.light;
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');

const trafficBtn = document.querySelector('.trafficBtn');

let running = false;
trafficBtn.addEventListener('click', ()=>{
  if(!running){
      running = true;

      trafficBtn.textContent = "실행중";

      if(lightActive == 'green'){
          green.classList.remove('lightActive');
          yellow.classList.add('lightActive');
          
          setTimeout(()=>{
              yellow.classList.remove('lightActive');
              red.classList.add('lightActive');
              lightActive = 'red';
              trafficBtn.textContent = "신호 바꾸기";  
              running = false;
          },3000);
      }

      else if(lightActive == 'red'){
          red.classList.remove('lightActive');
          yellow.classList.add('lightActive');
          
          setTimeout(()=>{
              yellow.classList.remove('lightActive');
              green.classList.add('lightActive');
              lightActive = 'green';
              trafficBtn.textContent = "신호 바꾸기";
              running = false;
          },3000);
      }
  }
});

/* ----------- STEP3 -----------*/
const preSliderBtn = document.querySelector('.preSliderBtn');
const nxtSliderBtn = document.querySelector('.nxtSliderBtn');
const wrap = document.querySelector('.wrap');

let currentpage = 1;

nxtSliderBtn.addEventListener('click', ()=>{
  if(currentpage == 1){
      wrap.style.transform = "translateX(-100vw)";
      currentpage = 2;
      nxtSliderBtn.classList.add("hiddenSliderBtn");
      preSliderBtn.classList.remove("hiddenSliderBtn"); 
  }
});
preSliderBtn.addEventListener('click', ()=>{
  if(currentpage ==2 ){
      wrap.style.transform = "translateX(0)";
      currentpage = 1;
      preSliderBtn.classList.add("hiddenSliderBtn");
      nxtSliderBtn.classList.remove("hiddenSliderBtn"); 
  }
});

/* ----------- STEP4 -----------*/
//슬라임 애니메이션
const object = document.querySelector('.object');
const slime = document.createElement('img');
const slimeImgs = ["./img/slime/슬라임1.png", "./img/slime/슬라임2.png", "./img/slime/슬라임3.png", "./img/slime/슬라임4.png"];
let curslime = 0;
object.appendChild(slime);

setInterval(()=>{
  if(curslime >= slimeImgs.length) curslime = 0;

  slime.src = slimeImgs[curslime];
  curslime++;
}, 300);

//슬라임 컨트롤
const slimeactive = document.querySelector('.slimeactive');
let isMove = false;

slimeactive.addEventListener('change', ()=>{
  isMove = slimeactive.checked;
})

let objectPosX = 0;
let objectPosY = 0;
window.addEventListener('keypress', slimeMove);

function slimeMove(e){
  if(isMove){
      switch(e.key){
          case "d":
              if(objectPosX < 440){
                  objectPosX += 5;
                  object.style.left = `${objectPosX}px`;
              }
              break;
          case "a":
              if(objectPosX > 0 ){
                  objectPosX -= 5;
                  object.style.left = `${objectPosX}px`;
              }
              break;
          case "w":
              if(objectPosY > 0 ){
                  objectPosY -= 5;
                  object.style.top = `${objectPosY}px`;
              }
              break;
          case "s":
              if(objectPosY < 200 ){
                  objectPosY += 5;
                  object.style.top = `${objectPosY}px`;
              }
              break;
      }
  }
}