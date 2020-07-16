
let elements = document.querySelectorAll('.item');
let arr = []
let score = 0
let reload = document.querySelector('button')

for (const element of elements) {
  element.onclick = function () {
    if (arr.length < 2) {
      this.querySelector('.cover').classList.add('clicked');
      arr.push(this.getAttribute("data-id"));
    }
    
    setTimeout(function () {
      if (arr.length == 2) {
        if (arr[0] == arr[1]) {
          score++
          document.querySelector(`.${arr[0]}`).classList.add('clicked')
          document.querySelector(`.${arr[1]}`).classList.add('clicked')
          arr = []
        } else {
          score--
          document.querySelector(`.clicked.${arr[0]}`).classList.remove('clicked')
          document.querySelector(`.clicked.${arr[1]}`).classList.remove('clicked')
          arr = []
        }
      }
    if (score == (elements.length/2)) {
      document.querySelector('.score').textContent = `Done, your score is:  ${score}`
    } else {
      document.querySelector('.score').textContent = `Score: ${score}`
    }
    }, 500)
  }
 
}

reload.onclick = function () {
  arr = []
  score = 0
  for (const element of elements) {
    element.querySelector('.cover').classList.remove('clicked');
  }
  document.querySelector('.score').textContent = 0
}