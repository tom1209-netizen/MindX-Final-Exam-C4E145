form = document.getElementById("form")
triangleOutput = document.getElementById("triangleOutput")
clr = document.getElementById("clr")

function numberOneTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let stars = document.createElement("h1")
    stars.innerHTML = "*".repeat(i)
    triangleOutput.append(stars)
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let n = parseInt(document.getElementById("n").value);

  numberOneTriangle(n)
});

clr.addEventListener("click", function() {
  triangleOutput.innerHTML = ""
})