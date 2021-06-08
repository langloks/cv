

const images = [
  "../assets/images/01.png", "../assets/images/02.png", "../assets/images/013.png", "../assets/images/04.png", "../assets/images/05.png", "../assets/images/06.png", "../assets/images/07.png", "../assets/images/08.png", "../assets/images/09.png", "../assets/images/010.png", "../assets/images/011.png", "../assets/images/012.png", "../assets/images/013.png", "../assets/images/014.png", "../assets/images/015.png", "../assets/images/016.png", "../assets/images/017.png", "../assets/images/018.png",
  "../assets/images/019.png", "../assets/images/020.png", "../assets/images/021.png", "../assets/images/022.png", "../assets/images/023.png", "../assets/images/024.png", "../assets/images/025.png", "../assets/images/026.png", "../assets/images/027.png", "../assets/images/028.png", "../assets/images/029.png", "../assets/images/031.png", "../assets/images/032.png", "../assets/images/033.png", "../assets/images/034.png", "../assets/images/035.png",
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement('img')
  img.setAttribute('src', nextSrc)
  img.setAttribute('draggable', 'false')

  img.style.left = x + 'px'
  img.style.top = y + 'px'
  img.style.transform =
    'translate(-50%, -50%) scale(0.6) rotate(' + (Math.random() * 10 - 5) + 'deg)'

  document.querySelector("body").appendChild(img)
  //   document.body.appendChild(img)

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}
let mouse=0

document.querySelector("body").addEventListener('mousemove', function (event) {
  // document.addEventListener('click', function(event) {
  event.preventDefault()
  mouse =mouse + 1 
  if (mouse % 20 ==0){
  placeImage(event.pageX, event.pageY)
  }
})

document.addEventListener('touchend', function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

var email = document.getElementById('mail');

email.addEventListener("mouseenter", function () {

var bgColors = ["#EE9F41", "#8558FF", "#A4BCFF", "#B5B507"];
var r = Math.floor((Math.random()* bgColors.length));

email.style.color = `${bgColors[r]}`;
console.log(r);
})