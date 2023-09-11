export function getRunningTime(callback: any, ...args: any): number {
    const start = new Date();
    callback(...args);
    const end = new Date();

    return end.getTime() - start.getTime();
}

export function createRandomArray(size: number): number[] {
    const arr = new Array(size);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }

    return arr;
}

// console.log(getRunningTime(createRandomArray, 1e6));
