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

// -----------step2------------
let lightActive = document.querySelector('.lightActive').dataset.light;
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');

const trafficBtn = document.querySelector('.trafficBtn');

let running = false;

trafficBtn.addEventListener('click', ()=>{
  // console.log(lightActive == 'green');
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
      }, 3000);
    }

    else if(lightActive == 'red'){
      red.classList.remove('lightActive');
      yellow.classList.add('lightActive');

      setTimeout(()=>{
        yellow.classList.remove('lightActive');
        green.classList.add('lightActive');
        lightActive = 'green';
        trafficBtn.textContent = '신호 바꾸기';
        running = false;
      }, 3000);
    }
  }
});
  

  // step3
const preSliderBtn = document.querySelector('.preSliderBtn');
const nxtSliderBtn = document.querySelector('.nxtSliderBtn');
const wrap = document.querySelector('.wrap');

let currentpage = 1;

nxtSliderBtn.addEventListener('click', ()=>{
  if(currentpage == 1){
    wrap.style.transform = "translateX(-100vw)";
    currentpage = 2;
    nxtSliderBtn.classList.add('hiddenSliderBtn');
    preSliderBtn.classList.remove('hiddenSliderBtn');
  }
});

preSliderBtn.addEventListener('click', ()=>{
  if(currentpage == 2){
    wrap.style.transform = 'translateX(0)';
    currentpage = 1;
    preSliderBtn.classList.add('hiddenSliderBtn');
    nxtSliderBtn.classList.remove('hiddenSliderBtn');
  }
});