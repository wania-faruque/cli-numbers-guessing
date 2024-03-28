#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "Please, Here guess any random numbers between 1 to 10: ",
},
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number:)");
} else {
    console.log("Sorry! You guessed a wrong number:/");
}
