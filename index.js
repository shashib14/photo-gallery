  
var dis = document.getElementById('dropdown');
var image= document.getElementById('image').getAttribute('src');
dis.style.transform = 'scaleY(0)';
function togglebutton(){
  if( dis.style.transform === 'scaleY(0)') {
    dis.style.transform = 'scaleY(1)';
    dis.style.transition = 'transform .8s ease-in-out';
    document.getElementById('image').src = 'icons/close.png';
  }
  else {
    dis.style.transform = 'scaleY(0)';
    dis.style.transition = 'transform .8s ease-in-out';
    document.getElementById('image').src = 'icons/menu1.png';
  }
}
  //show content when it is visible.
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}
loop();
function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



/*
function animimg() {
  getimg.forEach(function(element) {
    element.onclick = console.log('hii');
   });
}
animimg();*/

 






