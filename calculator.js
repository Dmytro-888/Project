var screen = document.getElementById("screen")

document.querySelectorAll(".operator,.number").forEach(button => {
  button.onclick = function () {
    console.log(button.textContent)
  }
})


