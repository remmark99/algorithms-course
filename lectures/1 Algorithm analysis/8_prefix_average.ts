import { createRandomArray, getRunningTime } from "./1_experimental_analysis";

function prefixAverage1(arr: number[]) {
    const prefixAverages: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += arr[j];
        }
        prefixAverages.push(sum / (i + 1));
    }

    return prefixAverages;
}

function prefixAverage2(arr: number[]) {
    const prefixAverages: number[] = [];

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        prefixAverages.push(sum / (i + 1));
    }

    return prefixAverages;
}

const testArr = createRandomArray(1e3);
console.log(getRunningTime(prefixAverage1, testArr));
console.log(getRunningTime(prefixAverage2, testArr));
