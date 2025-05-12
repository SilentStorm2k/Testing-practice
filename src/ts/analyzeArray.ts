export function analyzeArray(arr: number[]) {
    let min = arr[0],
        max = arr[0],
        sum = 0;
    const length = arr.length;

    arr.forEach((val) => {
        min = Math.min(min, val);
        max = Math.max(max, val);
        sum += val;
    });
    const average = sum / length;
    return {
        average,
        min,
        max,
        length,
    };
}
