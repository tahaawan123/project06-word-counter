#! /usr/bin/env node
import inquirer from "inquirer";




const answers: {
    sentence : string
} = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message : "Enter your sentence to count the word :"
    }
]);
const words = answers.sentence.trim().split(" ");


console.log(words);

console.log(`There are  "${words.length}"  words in your sentence.`);