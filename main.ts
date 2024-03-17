import inquirer from "inquirer";  
const answer = await inquirer.prompt([
    {
        name : "firstNumber",
        type : "number",
        message : "Please enter your first number:"
    },
    {
        name : "secondNumber",
        type : "number",
        message: "Please enter your seond number:"
    },
    {
        name : "operator",
        type :"list",
        message : "Kindly select one of the operators to perform action",
        choices : ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "Subtraction") {
    console.log(answer.Number - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.seondNumber);
} else if (answer.operator === "Division") { 
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select a valid operator")
}
