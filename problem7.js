function findEvenNumbers(array) {
    let evenNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }

    return evenNumbers;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(findEvenNumbers([16, 27, 32, 49, 54, 65])); 