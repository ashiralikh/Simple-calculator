import * as inquirer from "inquirer";
import chalk from "chalk";
//calculator oprater//
var oprater;
(function (oprater) {
    oprater["ADD"] = "Addition";
    oprater["SUBTARACT"] = "Subtraction";
    oprater["MULTIPLY"] = "MULTIPCATION";
    oprater["DIVIDE"] = "DEVSION";
})(oprater || (oprater = {}));
const prompt = inquirer.createPromptModule();
function validatenumber(input) {
    if (isNaN(parseFloat(input))) {
        return "plz enter the valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Plz enter the number",
            validate: validatenumber,
        },
        {
            type: "rawlist",
            name: "oprater",
            massage: "plz enter oprater",
            choices: Object.values(oprater),
        },
        {
            type: "input",
            name: "num2",
            message: "Plz enter the sec number",
            validate: validatenumber,
        },
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedoprater = input.oprater;
    let result;
    if (selectedoprater === oprater.ADD) {
        result = num1 + num2;
        console.log(chalk.blue.bgBlueBright(`Result is : ${result}`));
    }
    else if (selectedoprater === oprater.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.red.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedoprater === oprater.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.green.bgGreenBright(`Result is : ${result}`));
    }
    else if (selectedoprater === oprater.SUBTARACT) {
        result = num1 - num2;
        console.log(chalk.yellow.bgYellowBright(`Result is : ${result}`));
    }
}
main();
