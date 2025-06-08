var toggleBtn = document.querySelector('.tooglebtn');
var Header = document.querySelector('.header');

// toggle btn
toggleBtn.addEventListener('click',function(){
 Header.classList.toggle('show-wrapper')
})

// Fixed navigation bar functionality
window.addEventListener('scroll', () => {
 var headerSize = Header.getBoundingClientRect().height;
 var scrollPos = window.pageYOffset;
 if (scrollPos > headerSize) {
   Header.classList.add('fixed');
   Header.classList.remove('show-wrapper');
 }
if(scrollPos > 80){
 Header.classList.remove('show-wrapper');
}
  else {
   Header.classList.remove('fixed');
 }
});

// end of toggle btn


var blogContent = document.querySelectorAll('.blog-content'); 
blogContent.forEach(function(item){
  item.addEventListener('click',function(e){ 
if('click'){
var currenttarget = e.currentTarget;
currenttarget.classList.toggle('active');
}else{
  item.classList.remove('active')
}
// toggle hidden text
let hiddenArticle = currenttarget.querySelector(".hidden-article")
var moretext = currenttarget.querySelectorAll('.more-text');
moretext.forEach(function(item){item.classList.toggle('more-none')})
  if(hiddenArticle){
    hiddenArticle.classList.toggle('active-text');
  }
let contentimg = currenttarget.querySelector(".content-img")
  if(hiddenArticle){
    contentimg.classList.toggle('active-img');
  }
  })
}) 
