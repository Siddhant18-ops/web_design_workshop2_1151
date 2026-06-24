function checkNumber() {

    let number = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerHTML = "Please enter a number.";
        return;
    }

    number = parseInt(number);

    if (number % 2 === 0) {
        result.innerHTML = number + " is an Even Number.";
    } else {
        result.innerHTML = number + " is an Odd Number.";
    }
}