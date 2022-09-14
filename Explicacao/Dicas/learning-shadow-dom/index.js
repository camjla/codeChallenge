class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super()

    // write element functionality in here
    // Create a shadow root
    let shadow = this.attachShadow({ mode: 'open' })

    // Create spans
    let wrapper = document.createElement('span')
    wrapper.setAttribute('class', 'wrapper')
    let icon = document.createElement('span')
    icon.setAttribute('class', 'icon')
    icon.setAttribute('tabindex', 0)
    let info = document.createElement('span')
    info.setAttribute('class', 'info')

    // Take attribute content and put it inside the info span =pega o atributo e coloca no spam
    let text = this.getAttribute('data-text')
    info.textContent = text

    // Insert icon
    let imgUrl
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img')
    } else {
      imgUrl = 'img/default.png'
    }
    let img = document.createElement('img')
    img.src = imgUrl
    icon.appendChild(img)
  }
  // Create spans
let wrapper = document.createElement('span');
wrapper.setAttribute('class', 'wrapper');
let icon = document.createElement('span');
icon.setAttribute('class', 'icon');
icon.setAttribute('tabindex', 0);
let info = document.createElement('span');
info.setAttribute('class', 'info');

// Take attribute content and put it inside the info span
let text = this.getAttribute('data-text');
info.textContent = text;

// Insert icon
let imgUrl;
if(this.hasAttribute('img')) {
  imgUrl = this.getAttribute('img');
} else {
  imgUrl = 'img/default.png';
}
let img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);

}
