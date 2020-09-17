// import detectIt from 'detect-it'
import Flickity from 'flickity'
require('flickity-imagesloaded')

export default class herocarousel {
  constructor(el) {

    const flickityOptions = {
      cellAlign: 'center',
      draggable: true,
      imagesLoaded: true,
      prevNextButtons: false,
      fade: true,
      pageDots: false,
      wrapAround: true,
      pauseAutoPlayOnHover: false
    }

    let flkty = new Flickity( el, flickityOptions )
  }
}
