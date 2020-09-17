import Flickity from 'flickity'
require('flickity-imagesloaded')
require('flickity-fade')


export default class gallery {
  constructor(el) {

    let carouselCells = el.getElementsByClassName('carousel-cell')
    if(
      carouselCells.length > 1
    ){

    let prevBtns = el.getElementsByClassName("js-prev")
    let nextBtns = el.getElementsByClassName("js-next")

    var flkty = new Flickity( el, {
      fullscreen: true,
      draggable: true,
      pageDots: true,
      imagesLoaded: true,
      prevNextButtons: true,
      wrapAround: true,
      fade: true,
      autoPlay: 4000,

      arrowShape: {
        x0: 5,
        x1: 60, y1: 45,
        x2: 60, y2: 0,
        x3: 70
      }
    });
  }



  }
}
