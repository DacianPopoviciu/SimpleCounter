let counter = 0;
const value = document.querySelector("#value");
const btnOne = document.querySelector(".decrease");
const btnTwo = document.querySelector(".reset");
const btnThree = document.querySelector(".increase");

btnOne.addEventListener("click", function () {
  counter--;
  value.textContent = counter;
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter === 0) {
    value.style.color = "black";
  } else if (counter < 0) {
    value.style.color = "red";
  }
});
btnTwo.addEventListener("click", function () {
  counter = 0;
  value.textContent = counter;
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter === 0) {
    value.style.color = "black";
  } else if (counter < 0) {
    value.style.color = "red";
  }
});
btnThree.addEventListener("click", function () {
  counter++;
  value.textContent = counter;
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter === 0) {
    value.style.color = "black";
  } else if (counter < 0) {
    value.style.color = "red";
  }
});
