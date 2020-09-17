import Flickity from 'flickity'
require('flickity-imagesloaded')

export default class NewsCarousel {
  constructor(el) {

    let prevBtns = el.getElementsByClassName("js-prev")
    let nextBtns = el.getElementsByClassName("js-next")

    var flkty = new Flickity( el, {
      pageDots: false,
      wrapAround: false,
      imagesLoaded: true,
      cellAlign: 'left',
      autoPlay: false,
      prevNextButtons: false,
    });

      for (let prevBtn of prevBtns) {
    prevBtn.addEventListener('click', e => {
      e.preventDefault()
      flkty.previous()
    })
  }
      for (let nextBtn of nextBtns) {
        nextBtn.addEventListener('click', e => {
          e.preventDefault()
          flkty.next()
        })
      }

  }
}
