const menuBtn = document.getElementsByClassName("menu")[0];
const menu = document.getElementsByClassName("main-menu")[0];
menuBtn.addEventListener('click', function(){
    // console.log("clicked");
    menu.classList.toggle('active-menu')
})