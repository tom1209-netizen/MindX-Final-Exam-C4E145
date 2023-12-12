form = document.getElementById("form")
triangleOutput = document.getElementById("triangleOutput")
clr = document.getElementById("clr")

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let n = parseInt(document.getElementById("n").value);

  for (let i = 1; i <= n; i++) {
    let stars = document.createElement("h1")
    stars.innerHTML = "*".repeat(i)
    triangleOutput.append(stars)
  }
});

clr.addEventListener("click", function() {
  triangleOutput.innerHTML = ""
})