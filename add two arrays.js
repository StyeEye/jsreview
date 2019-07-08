// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function sumArrays(arr1, arr2) {
    const sumFunc = (total, e) => total + e;

    const sum1 = arr1.reduce(sumFunc, 0);
    const sum2 = arr2.reduce(sumFunc, 0);

    return sum1 + sum2;
}