#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to CLI-number-guessing-game");

const randomNumber = Math.floor(Math.random()* 7 + 1);

const input = await inquirer.prompt([
    {
        name : "numberGuessingGame",
        type : "number",
        message : "Enter  your number(Number limit 1-7)",
    },
])
if(input.numberGuessingGame === randomNumber) {
    console.log("Congratulation ! You guess it right.");
} else{
    console.log("sorry ! your guess number is wrong.");
}