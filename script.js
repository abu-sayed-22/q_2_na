// write your JavaScript here
const hamburger=document.querySelector(".hamburger")
const closeBtn=document.querySelector(".close_btn")
const mobileMenuBar=document.querySelector(".mobile_menu")

// adding event listener to the hamburger button for opening the menu
hamburger.addEventListener("click",function(e){
    mobileMenuBar.style.left="0px"
    mobileMenuBar.style.width="100%"
})
// adding event listener to the close btn button for closing the menu
closeBtn.addEventListener("click",function(e){
    mobileMenuBar.style.left="-100000000000px"
    mobileMenuBar.style.width="0%"

})