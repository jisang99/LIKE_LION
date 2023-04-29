// 중간 nav메뉴 마우스 오버시 밑줄 나오게 하는 코드
let midNavMenus = document.querySelectorAll(".midNavMenu");

midNavMenus.forEach((midNavMenu) =>{
  let midNavline = document.querySelector("#midNavLine");

  midNavMenu.addEventListener("mouseover", ()=>{
    let rect = midNavMenu.getBoundingClientRect();
    midNavLine.style.width = rect.width + "px";
    midNavLine.style.left = rect.left + "px";
    midNavLine.style.top = rect.top + rect.height + "px";
    midNavLine.style.display = "block";
  });

  midNavMenu.addEventListener("mouseout", ()=>{
    midNavLine.style.display = "none";
  });
})


// 회사소개서 다운로드 동그라미 마우스 오버시 색깔 빨간색 되면서 투명도 사라지게 하는 코드
let circle = document.querySelector(".circle");

circle.addEventListener("mouseover", ()=>{
  circle.style.backgroundColor = "red";
  circle.style.transition = "background-color 0.5s ease-out"
  circle.style.opacity = "1";
})

circle.addEventListener("mouseout", ()=>{
  circle.style.backgroundColor = "gray";
  circle.style.opacity = "0.5";
})
