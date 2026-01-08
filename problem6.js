function sumArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}
console.log(sumArray([1, 2, 3, 4])); 
console.log(sumArray([1, 3, 5, 7])); 