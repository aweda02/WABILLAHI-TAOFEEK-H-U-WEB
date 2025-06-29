var toggleBtn = document.querySelector('.tooglebtn');
var Header = document.querySelector('.header');

// toggle btn
toggleBtn.addEventListener('click',function(){
 Header.classList.toggle('show-wrapper')
})

// Fixed navigation bar functionality
window.addEventListener('scroll', () => {
 var scrollPos = window.pageYOffset;
if(scrollPos > 80){
 Header.classList.remove('show-wrapper');
}
});

// end of toggle btn
 