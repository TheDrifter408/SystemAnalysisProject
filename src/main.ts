//grab the button element on header
const menuOpenBtn = document.getElementById("menuOpenBtn");
const menuCloseBtn = document.getElementById("leftMenuCloseBtn");
const settingBtn = document.getElementById("settingBtn");
const rightMenuCloseBtn = document.getElementById("rightMenuCloseBtn");
//grab the aside elements 
const leftMenu = document.getElementById("leftMenu"); 
const rightMenu = document.getElementById("rightMenu");
//Add the class to slide the left menu in
menuOpenBtn?.addEventListener("click",(e)=>{
  e.preventDefault();
  leftMenu?.classList.toggle('leftSideMenuSlideIn');
})
//add event to slide the left menu away
menuCloseBtn?.addEventListener('click',(e) => {
  e.preventDefault();
  leftMenu?.classList.toggle('leftSideMenuSlideIn');
})
//add the class to slide the settings menu in
settingBtn?.addEventListener('click',(e) => {
  e.preventDefault();
  rightMenu?.classList.toggle('rightSideMenuSlideIn')
})
//add the class to slide the settings menu away
rightMenuCloseBtn?.addEventListener('click',(e) => {
  e.preventDefault();
  rightMenu?.classList.toggle('rightSideMenuSlideIn')
})
