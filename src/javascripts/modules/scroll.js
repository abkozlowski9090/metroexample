
export default class scroll {
    constructor(el) {
      var scrollPosition = window.scrollY;
      var navScroll = el;
      var screenSize = window.matchMedia( "(max-width: 1600px)" );
      console.log(navScroll);

        window.addEventListener('scroll', function() {

        scrollPosition = window.scrollY;

        if ( scrollPosition >= 100 ) {
            document.getElementsByClassName("burger-nav-button")[0].style.display = "block"
            document.getElementsByClassName("nav-cta-btn")[0].style.display = "none"
            navScroll.classList.add("hide-menu");
            navScroll.classList.toggle("nav-coloured");
            navScroll.classList.add("nav-coloured");
        }
        else {
            document.getElementsByClassName("burger-nav-button")[0].style.display = "none"
            document.getElementsByClassName("nav-cta-btn")[0].style.display = "block"
            navScroll.classList.remove("hide-menu");
            navScroll.classList.remove("nav-coloured");
          }
      });

  }
}
