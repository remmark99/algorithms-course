import { createRandomArray, getRunningTime } from "./1_experimental_analysis";

function hasDuplicates(arr: number[]) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++)
        if (arr[i] === arr[i + 1]) return true;

    return false;
}

console.log(getRunningTime(hasDuplicates, createRandomArray(1e6)));
