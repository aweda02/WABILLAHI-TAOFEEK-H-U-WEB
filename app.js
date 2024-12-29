var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("A-navbar").style.top = "0";
  } else {
    document.getElementById("A-navbar").style.top = "-1100px";
  }
  prevScrollpos = currentScrollPos;
}