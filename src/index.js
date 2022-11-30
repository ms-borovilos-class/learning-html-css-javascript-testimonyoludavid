function buttonAlert() {
    alert("This is an alert")
  }
  
  function addition(a, b) {
    alert(a + b)
  }
  
  function subtraction(a, b) {
    alert(a - b)
  }
  
  function multiplication(a, b) {
    alert(a * b)
  }
  
  function division(a, b) {
    alert(a / b)
  }
  
  function calculator() {
    var operation = prompt("Enter an operation")
    var a = prompt("Enter your first number")
    var b = prompt("Enter your second number")
  
    if (operation === "addition") {
      alert(addition(a, b))
    } else if (operation === "subtraction") {
      alert(subtraction(a, b))
    } else if (operation === "multiplication") {
      alert(multiplication(a, b))
    } else if (operation === "division") {
      alert(division(a, b))
    } else {
      alert("Invalid operation")
    }
  }