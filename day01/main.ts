/*
Advent of Code 2020
Day 1, part 1 & 2
2021-12-02
Emil Malm
https://github.com/znibblol/AdventOfCode2020
*/
import { data } from './data';

const test: number[] = [
    1721,
    979,
    366,
    299,
    675,
    1456
];

/*
### PART 1 ###
*/

function mutiplyTwoFactorsThatEqual2020(data: number[]): number {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] + data[j] === 2020) {
                return data[i] * data[j];
            }
        }

    }
    return 1;
}

console.log(mutiplyTwoFactorsThatEqual2020(data));

/*
### PART 2 ###
*/

function mutiplyThreeFactorsThatEqual2020(data: number[]): number {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            for (let n = 0; n < data.length; n++) {
                if (data[i] + data[j] + data[n] === 2020) {
                    return data[i] * data[j] * data[n];
                }
            }
        }

    }
    return 1;
}

console.log(mutiplyThreeFactorsThatEqual2020(data));
