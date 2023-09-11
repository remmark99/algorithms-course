import { createRandomArray, getRunningTime } from "./1_experimental_analysis";

function findMax(arr: number[]) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    return max;
}

console.log(getRunningTime(findMax, createRandomArray(100)));

// Harmonic series
