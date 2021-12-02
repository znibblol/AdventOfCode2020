/*
Advent of Code 2020
Day 1, part 1 & 2
2021-12-02
Emil Malm
https://github.com/znibblol/AdventOfCode2020
*/

import { data } from './data';

const test = [
    "1 - 3 a: abcde",
    "1 - 3 b: cdefg",
    "2 - 9 c: ccccccccc"
];

/*
### PART 1 ###
*/

function checkHowManyValidPasswords(data: string[]): number {
    const regex = /(\d*\s-\s\d*)\s(\w):\s([a-zA-Z]*)/;
    let sum = 0;
    var testArr: any[] = [];
    data.forEach((password: string) => {
        testArr.push(password.match(regex));
    });

    testArr.forEach((regexMatch: string) => {
        // Splitting string into array
        let numberOfTimesString: string[] = regexMatch[1].split(" - ");
        // Parsing each string to a number
        let numberOfTimes: number[] = numberOfTimesString.map((n: string) => {
            return parseInt(n);
        });
        if (regexMatch[3].split(regexMatch[2]).length - 1 >= numberOfTimes[0] && regexMatch[3].split(regexMatch[2]).length - 1 <= numberOfTimes[1]) {
            sum++;
        }
    });

    return sum;
}

console.log(checkHowManyValidPasswords(data));

/*
### PART 2 ###
*/

function checkHowManyValidPasswordsPartTwo(data: string[]): number {
    const regex = /(\d*\s-\s\d*)\s(\w):\s([a-zA-Z]*)/;
    let sum = 0;
    var testArr: any[] = [];
    data.forEach((password: string) => {
        testArr.push(password.match(regex));
    });

    testArr.forEach((regexMatch: string) => {
        // Splitting string into array
        let numberOfTimesString: string[] = regexMatch[1].split(" - ");
        // Parsing each string to a number
        let numberOfTimes: number[] = numberOfTimesString.map((n: string) => {
            return parseInt(n);
        });
        if ((regexMatch[3][numberOfTimes[0] - 1] == regexMatch[2] && regexMatch[3][numberOfTimes[1] - 1] != regexMatch[2]) || (regexMatch[3][numberOfTimes[0] - 1] != regexMatch[2] && regexMatch[3][numberOfTimes[1] - 1] == regexMatch[2])) {
            sum++;
        }
    });

    return sum;
}

console.log(checkHowManyValidPasswordsPartTwo(data));
