$(function(){
    
});

let scrollpos = window.scrollY;

const header = document.querySelector(".header");
const scrollChange = 3;

const add_class_on_scroll = () => header.classList.add("header--bg-white");
const remove_class_on_scroll = () => header.classList.remove("header--bg-white");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})