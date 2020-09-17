export default class contactshow {
  constructor(el) {

    var contactBtn = el
    var contactPanel = document.getElementsByClassName("js-contact-panel")[0]
    var contactCross = document.getElementsByClassName("js-contact-cross")[0]

    contactBtn.addEventListener('click', (e) => {
      contactPanel.classList.toggle('is-hidden');
    })

    contactBtn.addEventListener('click', (e) => {
      contactCross.classList.toggle('is-hidden');
      document.body.classList.remove('nav-open')
      document.body.classList.add('nav-hide')
    })

    contactBtn.addEventListener('click', (e) => {
      contactCross.classList.toggle('is-hidden');
      document.body.classList.remove('nav-hide')
    })

  }
}
