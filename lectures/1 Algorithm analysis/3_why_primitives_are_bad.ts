import { createRandomArray, getRunningTime } from "./1_experimental_analysis";

function getConditionalSum(arr: number[]) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 5) sum += arr[i];
    }

    return sum;
}

console.log(getRunningTime(getConditionalSum, createRandomArray(1e6)));
