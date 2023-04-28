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



