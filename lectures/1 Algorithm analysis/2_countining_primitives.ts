import { createRandomArray, getRunningTime } from "./1_experimental_analysis";

function getSum(arr: number[]) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(getRunningTime(getSum, createRandomArray(1e6)));
