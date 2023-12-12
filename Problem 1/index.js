let primeNumRange = document.getElementById("primeNumRange");
let primeNumSum = document.getElementById("primeNumSum");
let form = document.getElementById("form");

function isPrime(x) {
  if (x === 1 || x === 0) {
    return false;
  } else if (x === 2) {
    return true;
  } else {
    for (let i = 2; i < Math.sqrt(x); i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let arr = [];
  let sum = 0;

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      arr.push(i);
      sum += i;
    }
  }

  if (arr.length !== 0) {
    primeNumRange.innerHTML = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + arr.join(", ");
    primeNumSum.innerHTML = "Tổng các số nguyên tố trong khoảng là: " + sum;
  } else {
    primeNumRange.innerHTML =
      "Không có số nguyên tố nào trong khoảng từ " + a + " đến " + b;
    primeNumSum.innerHTML = "Tổng các số nguyên tố trong khoảng là: 0";
  }
});
