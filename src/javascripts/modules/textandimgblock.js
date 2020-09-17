import Flickity from 'flickity'
require('flickity-imagesloaded')
require('flickity-fade')

export default class textandimgblock {
  constructor(el) {

    var flkty = new Flickity( el, {
      draggable: true,
      pageDots: true,
      // fade: true,
      imagesLoaded: true,
      prevNextButtons: false,
    });

    if ( matchMedia('screen and (min-width: 1200px)').matches ) {
      var flkty = new Flickity( el, {
        draggable: false,
      });
  }



  }
}
