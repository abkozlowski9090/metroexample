import './modules'
import svgSpriteInjector from 'svg-sprite-injector'
import SmoothScroll from 'smooth-scroll'
import detectIt from 'detect-it'
import lax from 'lax.js'

svgSpriteInjector(document.body)

window.onload = function() {
	if(!detectIt.hasTouch) {
		lax.setup() // init

		const updateLax = () => {
			lax.update(window.scrollY)
			window.requestAnimationFrame(updateLax)
		}

		window.requestAnimationFrame(updateLax)
	}
}

let smoothScrollOffset = 60
let scroll = new SmoothScroll('[data-scroll]', {
  offset: smoothScrollOffset,
  speed: 400,
  updateURL: false,
  popstate: false,
});

// Detect window has scrolled, add class to header to change state
let scrollState = 0;

let scrollDetect = function(home, down) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};
