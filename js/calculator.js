
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;

        }
    })
})


























// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let currentInput = "";

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         let buttonValue = e.target.innerHTML;

//         if (buttonValue === "=") {
//             try {
//                 currentInput = eval(currentInput).toString();  // Evaluate the expression
//                 input.value = currentInput;
//             } catch (error) {
//                 input.value = "Error";  // Show error if invalid expression
//                 currentInput = "";
//             }
//         } else if (buttonValue === "C") {
//             currentInput = "";  // Clear the input
//             input.value = currentInput;
//         } else if (buttonValue === "DEL") {
//             currentInput = currentInput // Delete last character
//             input.value = currentInput;
//         } else {
//             currentInput += buttonValue;  // Append value to current input
//             input.value = currentInput;
//         }

//     });
// });
