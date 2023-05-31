var screen = document.getElementById("screen")

function calculate(button) {
  screen.textContent += button.textContent
}

document.querySelectorAll(".operator,.number").forEach(button => {
  button.onclick = () => calculate(button) 
})
