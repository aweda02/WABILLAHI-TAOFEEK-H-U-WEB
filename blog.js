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
s
