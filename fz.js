const getFizzBuzz = () => {
  let inputNumber = document.getElementById("inputNumber").value;
  let result = document.getElementById("result");

  if (inputNumber % 15 === 0) {
    return (result.textContent = "fizzbuzz!");
  }
  if (inputNumber % 3 === 0) {
    return (result.textContent = "fizz!");
  }
  if (inputNumber % 5 === 0) return (result.textContent = "buzz!");
  {
    if (isNaN(inputNumber)) return (result.textContent = "Not a Number! ");
    //   return (result.textContent = "Not a number!");
    // }
  }
};
