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


// 오른쪽 메뉴 a태그 기능 없애버리기 
const rightNavLinks = document.querySelectorAll('.rightNav a');

rightNavLinks.forEach((rightNavLink) => {
  rightNavLink.addEventListener('click', function(event) {
  event.preventDefault(); // 클릭 이벤트를 취소합니다.
    // 여기에 클릭 이벤트가 발생했을 때 실행할 코드를 추가합니다.
  });
})



// 드롭다운 메뉴 구현하기 위한 코드 (id 부여해서 개별로 드롭다운 메뉴 동작하도록 구현)
// 사실상 노가다로 구현함
const subMenu = document.querySelector(".subMenu");
// 첫번째
const rightNavMenu1 = document.querySelector("#rightNavMenu1");
const subMenu1 = document.querySelector("#subMenu1");

let show_sub1 = () =>{
  subMenu1.style.height="120px";
}

let close_sub1 = () =>{
subMenu1.style.height="0px";
}

// 그냥 단순하게 생각해서 알고리즘 만들면 되더라
rightNavMenu1.addEventListener("mouseover", show_sub1);
rightNavMenu1.addEventListener("mouseout", close_sub1);
subMenu1.addEventListener("mouseover", show_sub1);
subMenu1.addEventListener("mouseout", close_sub1);

// 두번째
const rightNavMenu2 = document.querySelector("#rightNavMenu2");
const subMenu2 = document.querySelector("#subMenu2");

let show_sub2 = () =>{
  subMenu2.style.height="120px";
}

let close_sub2 = () =>{
subMenu2.style.height="0px";
}

rightNavMenu2.addEventListener("mouseover", show_sub2);
rightNavMenu2.addEventListener("mouseout", close_sub2);
subMenu2.addEventListener("mouseover", show_sub2);
subMenu2.addEventListener("mouseout", close_sub2);

// 네번째
const rightNavMenu4 = document.querySelector("#rightNavMenu4");
const subMenu4 = document.querySelector("#subMenu4");


let show_sub4 = () =>{
    subMenu4.style.height="120px";
}

let close_sub4 = () =>{
  subMenu4.style.height="0px";
}

rightNavMenu4.addEventListener("mouseover", show_sub4);
rightNavMenu4.addEventListener("mouseout", close_sub4);
subMenu4.addEventListener("mouseover", show_sub4);
subMenu4.addEventListener("mouseout", close_sub4);