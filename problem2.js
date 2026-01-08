function countVowels(string) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    string = string.toLowerCase();

    for (letter of string) {
        if (vowels.includes(letter)) {
            count = count + 1;
        }
    }
    return count;
}

console.log(countVowels("programming"));
console.log(countVowels("programming Hero"));