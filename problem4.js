function findMax(array) {
    let max = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

console.log(findMax([5, 1, 9, 3]));
console.log(findMax([15, 21, 39, 33]));