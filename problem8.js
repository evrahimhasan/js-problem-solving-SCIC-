function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            result.push(word[0].toUpperCase() + word.slice(1));
        } else {
            result.push(word);
        }
    }

    return result.join(" ");
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("my name is evrahim hasan emran"));