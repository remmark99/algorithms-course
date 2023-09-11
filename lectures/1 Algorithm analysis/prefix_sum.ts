import { createRandomArray, getRunningTime } from "./1_experimental_analysis";

function prefixSum(arr: number[]) {
    const prefixSums: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += arr[j];
        }
        prefixSums.push(sum / (i + 1));
    }

    return prefixSums;
}

console.log(
    getRunningTime(prefixSum, createRandomArray(1e4), createRandomArray(1e4)),
);
