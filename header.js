const header = document.querySelector('header');
const h1 = document.querySelector('h1');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 3 && document.activeElement !== searchBox) {
    header.classList.remove('header-opened');
  } else if (window.pageYOffset === 0) {
    header.classList.add('header-opened');
  }
});

// to prevent header from collapsing while searchBox is in focus
// searchBox.onfocus = header.classList.add('header-opened');
// searchBox.onfocus = header.classList.remove('header-closed');

/*

=== NOTE TO SELF ===

// how to detect scroll direction
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
			console.log('down')
   } else {
      // upscroll code
			console.log('up')
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

*/
