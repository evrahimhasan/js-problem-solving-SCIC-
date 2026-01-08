function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] === string[right]) {
            return true;
        }
        left++;
        right--;
    }
    return false
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('ma'));
console.log(isPalindrome('level'));