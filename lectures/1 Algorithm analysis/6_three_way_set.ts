import { createRandomArray, getRunningTime } from "./1_experimental_analysis";

// O(?)
function disjoint(first: number[], second: number[], third: number[]) {
    const { length } = first;
    let count = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            for (let k = 0; k < length; k++) {
                if (first[i] === second[j] && second[j] === third[k]) count++;
            }
        }
    }

    return count;
}

// O(?)
function disjoint2(first: number[], second: number[], third: number[]) {
    const { length } = first;
    let count = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (first[i] === second[j])
                for (let k = 0; k < length; k++) {
                    if (first[i] === second[j] && second[j] === third[k])
                        count++;
                }
        }
    }

    return count;
}

const disjoinArr = createRandomArray(100);
console.log(getRunningTime(disjoint, disjoinArr));
console.log(getRunningTime(disjoint2, disjoinArr));
