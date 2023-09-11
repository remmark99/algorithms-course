import { getRunningTime } from "./1_experimental_analysis";

function fib(n: number): number {
    if (n === 1 || n === 2) return n - 1;

    return fib(n - 1) + fib(n - 2);
}

console.log(getRunningTime(fib, 20));
